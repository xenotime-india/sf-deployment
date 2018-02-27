
//jsForce connection
import session from 'express-session';
import bodyParser from 'body-parser';
import config from 'config';
import helmet from 'helmet';
import cors from 'cors';
import { login, whoami, logout, signature, callback } from './auth';
import nocache from "nocache";

export default (app) => {
    app.use(nocache());
    app.use(helmet());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());

    app.use(session({
        secret: config.sessionSecretKey,
        cookie: { secure: config.isHttps === 'true' },
        resave: false,
        saveUninitialized: false
    }));

    app.get('/auth/login', login);
    app.get('/auth/callback', callback);
    app.get('/auth/whoami', whoami);
    app.get('/auth/signature', signature);
    app.get('/auth/logout', logout);

    return app;
};