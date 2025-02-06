"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const StoreController_1 = require("../controller/StoreController");
const Utils_1 = require("../utils/Utils");
const GlobalMiddleware_1 = require("../middlewares/GlobalMiddleware");
const StoreValidators_1 = require("../validator/StoreValidators");
class StoreRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get("/getStores", GlobalMiddleware_1.GlobalMiddleWare.auth, GlobalMiddleware_1.GlobalMiddleWare.adminRole, StoreController_1.StoreController.getStores);
        this.router.get("/getAllStores", GlobalMiddleware_1.GlobalMiddleWare.auth, GlobalMiddleware_1.GlobalMiddleWare.adminRole, StoreController_1.StoreController.getStores);
        this.router.get("/searchStores", GlobalMiddleware_1.GlobalMiddleWare.auth, GlobalMiddleware_1.GlobalMiddleWare.adminRole, StoreValidators_1.StoreValidators.searchStores(), GlobalMiddleware_1.GlobalMiddleWare.checkError, StoreController_1.StoreController.searchStores);
    }
    postRoutes() {
        this.router.post("/create", GlobalMiddleware_1.GlobalMiddleWare.auth, GlobalMiddleware_1.GlobalMiddleWare.adminRole, new Utils_1.Utils().multer.single("storeImages"), StoreValidators_1.StoreValidators.addStore(), GlobalMiddleware_1.GlobalMiddleWare.checkError, StoreController_1.StoreController.addStore);
    }
    patchRoutes() { }
    putRoutes() { }
    deleteRoutes() { }
}
exports.default = new StoreRouter().router;
