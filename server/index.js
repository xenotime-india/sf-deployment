// 3rd party dependencies
import express from 'express';
import config from 'config';
import winston from 'winston';
import api from './lib';

winston.level = config.WINSTON_LEVEL || 'debug';
const dev = config.NODE_ENV !== 'production';
const port = config.PORT;
const serverRoutes = ['/api', '/auth'];

// Scaffold the server
const startServer = async () => {
    const app = api(express());

    app.use(express.static('build'));

    app.get('*', function(req, res, next) {
        const filerRoutes = serverRoutes.filter((serverRoute) => {
            return serverRoute.startsWith(req.url)
        })
        if (filerRoutes.length == 0) {
            return res
                .set('Content-Type', 'text/html')
                .sendFile(__dirname + '/build/index.html');
        }
        return next();
    });

    app.listen(port, err => {
        if (err) throw err;
        winston.info(`> Ready on http://localhost:${port}`);
    });
};

// Start the server
startServer();
