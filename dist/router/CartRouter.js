"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GlobalMiddleware_1 = require("../middlewares/GlobalMiddleware");
const CartController_1 = require("../controller/CartController");
const CartValidators_1 = require("../validator/CartValidators");
class OrderRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get("/getCart", GlobalMiddleware_1.GlobalMiddleWare.auth, CartController_1.CartController.getUserCart);
    }
    postRoutes() {
        this.router.post("/create", GlobalMiddleware_1.GlobalMiddleWare.auth, CartValidators_1.CartValidators.addToCart(), GlobalMiddleware_1.GlobalMiddleWare.checkError, CartController_1.CartController.addToCart);
    }
    patchRoutes() { }
    putRoutes() { }
    deleteRoutes() { }
}
exports.default = new OrderRouter().router;
