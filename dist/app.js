"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const appRoutes_1 = require("./routes/appRoutes");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.routePrv = new appRoutes_1.Routes();
        this.mongoURL = 'mongodb://localhost/CRMdb';
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
    config() {
        //soporte para application/json de tipo POST
        this.app.use(bodyParser.json());
        //soporte para application/x-www-form-urlencoded de tipo POST
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoURL);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map