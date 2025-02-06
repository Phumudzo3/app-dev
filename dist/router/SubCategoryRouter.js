"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GlobalMiddleware_1 = require("../middlewares/GlobalMiddleware");
const Utils_1 = require("../utils/Utils");
const subCategoryCotroller_1 = require("../controller/subCategoryCotroller");
const SubCategoryValidators_1 = require("../validator/SubCategoryValidators");
class SubCategoryRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get("/getSubCategories", GlobalMiddleware_1.GlobalMiddleWare.auth, subCategoryCotroller_1.SubCategoryController.getSubCategories);
        this.router.get("/getSubCategories/:categoryId", GlobalMiddleware_1.GlobalMiddleWare.auth, subCategoryCotroller_1.SubCategoryController.getCategoriesByCategory);
    }
    postRoutes() {
        this.router.post("/create", GlobalMiddleware_1.GlobalMiddleWare.auth, GlobalMiddleware_1.GlobalMiddleWare.adminRole, new Utils_1.Utils().multer.single("subCategoryImages"), SubCategoryValidators_1.SubCategoryValidators.addSubCategory(), GlobalMiddleware_1.GlobalMiddleWare.checkError, subCategoryCotroller_1.SubCategoryController.addSubCategory);
    }
    patchRoutes() { }
    putRoutes() { }
    deleteRoutes() { }
}
exports.default = new SubCategoryRouter().router;
