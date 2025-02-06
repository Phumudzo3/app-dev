"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GlobalMiddleware_1 = require("../middlewares/GlobalMiddleware");
const CityController_1 = require("../controller/CityController");
const CityValidators_1 = require("../validator/CityValidators");
class CityRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get("/cities", CityController_1.CityController.getCities);
    }
    postRoutes() {
        this.router.post("/create", CityValidators_1.CityValidators.addCity(), GlobalMiddleware_1.GlobalMiddleWare.checkError, CityController_1.CityController.addCity);
    }
    patchRoutes() { }
    putRoutes() { }
    deleteRoutes() { }
}
exports.default = new CityRouter().router;
