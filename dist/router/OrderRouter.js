"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GlobalMiddleware_1 = require("../middlewares/GlobalMiddleware");
const OrderController_1 = require("../controller/OrderController");
const OrderValidators_1 = require("../validator/OrderValidators");
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
        this.router.get("/userOrders", GlobalMiddleware_1.GlobalMiddleWare.auth, OrderController_1.OrderController.getUserOrders);
    }
    postRoutes() {
        this.router.post("/create", GlobalMiddleware_1.GlobalMiddleWare.auth, OrderValidators_1.OrderValidators.placeOrder(), GlobalMiddleware_1.GlobalMiddleWare.checkError, OrderController_1.OrderController.placeOrder);
        this.router.post("/stripeCheckout", OrderController_1.OrderController.stripeCheckout);
    }
    patchRoutes() { }
    putRoutes() { }
    deleteRoutes() { }
}
exports.default = new OrderRouter().router;
