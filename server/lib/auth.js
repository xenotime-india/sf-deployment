import config from "config";
import jsforce from "jsforce";
import { errorResponse } from './services/error';
import knexService from './services/knex';
import jwtService from './services/jwt';
import userSessions from './services/redis';
import signatureService from './services/signature';
import winston from 'winston';

const oauth2 = new jsforce.OAuth2({
    loginUrl : config.sfloginUrl,
    clientId : config.sfclientId,
    clientSecret : config.sfclientSecret,
    redirectUri : config.sfredirectUri
});

const getSession = (request, response) => {
    const session = request.session;
    if (typeof session['sfdcAuth'] === 'undefined') {
        response.status(401).send('No active session');
        return null;
    }
    return session;
}

export const login = (req, res) => {
    // Redirect to Salesforce login/authorization page
    winston.log('innnnnn')
    res.redirect(oauth2.getAuthorizationUrl({scope: 'id refresh_token'}));
};

export const callback = (req, res) => {
    if (!req.query.code) {
        res.status(500).send('Failed to get authorization code from server callback.');
        return;
    }

    const conn = new jsforce.Connection({oauth2: oauth2});
    const code = req.query.code;
    conn.authorize(code, function(err, userInfo) {
        if (err) { return winston.error("This error is in the auth callback: " + err); }

        winston.info('Access Token: ' + conn.accessToken);
        winston.info('Instance URL: ' + conn.instanceUrl);
        winston.info('refreshToken: ' + conn.refreshToken);
        winston.info('User ID: ' + userInfo.id);
        winston.info('Org ID: ' + userInfo.organizationId);

        let jwt = jwtService.sign(userInfo, '2h');
        userSessions
            .setAsync(jwt, 'true')
            .then(() => {
                // Pass the JWT to the webclient for processing
                return res.redirect(`${config.WEB_CLIENT_ROOT}?token=${jwt}`);
            })
            .catch(errorResponse(res));
    });
};

export const signature = (req, res) => {
    let authorization = req.headers['authorization'];
    if (!authorization) {
        return res.status(401).json({ error: 'Unauthorized access detected' });
    }

    let profile = {};
    let token = authorization.replace('Bearer ', '');
    userSessions
        .getAsync(token)
        .then(result => {
            if (!result) {
                throw new Error(`Unauthorized access detected`);
            }
            return jwtService.verify(token);
        })
        .then(decoded => {
            return knexService
                .select()
                .from('public.user')
                .whereRaw(`LOWER(email) = LOWER('${decoded.email}')`);
        })
        .then(results => {
            if (results.length === 1) {
                profile.firstName = results[0].firstname;
                profile.lastName = results[0].lastname;
                profile.uid = results[0].sfid;
                return signatureService(results[0].email);
            }

            return false;
        })
        .then(saltAndSignature => {
            if (saltAndSignature) {
                profile = Object.assign(saltAndSignature, profile);
                return res.json(profile);
            }
            return res.status(401).json({ error: 'Unauthorized access detected' });
        })
        .catch(errorResponse(res));
};

export const logout = (req, res) => {
    const session = getSession(req, res);
    if (session == null)
        return;

    // Revoke OAuth token
    sfdc.auth.revoke({token: session.sfdcAuth.access_token}, function(error) {
        if (error) {
            console.error('Force.com OAuth revoke error: '+ JSON.stringify(error));
            res.status(500).json(error);
            return;
        }

        // Destroy server-side session
        session.destroy(function(error) {
            if (error)
                console.error('Force.com session destruction error: '+ JSON.stringify(error));
        });

        // Redirect to app main page
        return res.redirect('/index.html');
    });
};

export const whoami = (req, res) => {
    const session = getSession(req, res);
    if (session == null)
        return;

    // Request user info from Force.com API
    sfdc.data.getLoggedUser(session.sfdcAuth, function (error, userData) {
        if (error) {
            console.log('Force.com identity API error: '+ JSON.stringify(error));
            res.status(500).json(error);
            return;
        }
        // Return user data
        res.send(userData);
        return;
    });
};