
// DEPENDENCIES
import * as express from 'express';
import * as bp from 'body-parser';
import * as path from 'path';
import * as session from 'express-session';
import { logger } from './logger';

const server = express();

//allow cross origin requests
server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", `http://localhost:${PORT}`);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", '');
    next();
});

// initializes server to access json body data
server.use(bp.json({limit: '50mb'}));

// initializes server static folder path to where the angular app builds 
server.use(express.static(path.join(__dirname, './../../../client/WebApp/dist')));

// initializes the servers session type through the express-session middleware  
server.use(session({
    secret: 'my secret key',
    resave: false,
    saveUninitialized: false
}));

// initializes server logger for console debugging
server.use(logger);

// port declared here
export const PORT = 8000;

// facial recognition microservice url. Current LAN Url: http://192.168.1.192:1234/
export const MICROSERVICE = 'http://localhost:1234/';

// app is the total express instantiated object
export const app = server;
