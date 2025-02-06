"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GlobalMiddleware_1 = require("../middlewares/GlobalMiddleware");
const ProductContoller_1 = require("../controller/ProductContoller");
const Utils_1 = require("../utils/Utils");
const ProductValidators_1 = require("../validator/ProductValidators");
class ProductRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get("/getByCategory", ProductValidators_1.ProductValidators.getProductByCategory(), GlobalMiddleware_1.GlobalMiddleWare.checkError, GlobalMiddleware_1.GlobalMiddleWare.auth, ProductContoller_1.ProductController.getProductByCategory);
    }
    postRoutes() {
        this.router.post("/create", GlobalMiddleware_1.GlobalMiddleWare.auth, GlobalMiddleware_1.GlobalMiddleWare.adminStoreRole, new Utils_1.Utils().multer.array("productImages"), ProductValidators_1.ProductValidators.addItem(), GlobalMiddleware_1.GlobalMiddleWare.checkError, ProductContoller_1.ProductController.addItem);
    }
    patchRoutes() { }
    putRoutes() { }
    deleteRoutes() { }
}
exports.default = new ProductRouter().router;
