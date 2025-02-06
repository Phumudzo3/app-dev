"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GlobalMiddleware_1 = require("../middlewares/GlobalMiddleware");
const CategoryController_1 = require("../controller/CategoryController");
const CategoriesValidators_1 = require("../validator/CategoriesValidators");
const Utils_1 = require("../utils/Utils");
class CategoryRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get("/getCategories", GlobalMiddleware_1.GlobalMiddleWare.auth, CategoryController_1.CategoryController.getCategories);
    }
    postRoutes() {
        this.router.post("/create", GlobalMiddleware_1.GlobalMiddleWare.auth, GlobalMiddleware_1.GlobalMiddleWare.adminRole, new Utils_1.Utils().multer.single("categoryImages"), CategoriesValidators_1.CategoryValidators.addCategory(), GlobalMiddleware_1.GlobalMiddleWare.checkError, CategoryController_1.CategoryController.addCategory);
    }
    patchRoutes() { }
    putRoutes() { }
    deleteRoutes() { }
}
exports.default = new CategoryRouter().router;
