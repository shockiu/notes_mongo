import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import '../config/db.js'
import routesApi from '../routes/index.routes.js';

export class Server { 
    
    port = process.env.PORT || '8084';
    apiPath = {
        routes: '/api/v1'
    }

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Parse JSON from request
        this.app.use( express.json() );

        // Morgan config
       // this.app.use(this.morganConfigMiddleware());
    }

    routes() {
        this.app.use(this.apiPath.routes, routesApi);
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('VERSION ' + process.env.VERSION )
            console.log(`SERVER EXPRESS ONLINE PORT: ${this.port}`);
        });
    }

    // verificar uso
    get appServer() {
        return this.app;
    }

}
