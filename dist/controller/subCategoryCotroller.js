"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryController = void 0;
const subCategory_1 = require("../models/subCategory");
class SubCategoryController {
    static getSubCategories(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sub_categories = yield subCategory_1.default.find({}, { __v: 0 });
                res.send(sub_categories);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static getCategoriesByCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryId = req.params.categoryId;
            try {
                const categories = yield subCategory_1.default.find({ category_id: categoryId }, { __v: 0 });
                res.send(categories);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static addSubCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = req.body.name;
            const status = req.body.status;
            const category_id = req.body.category_id;
            try {
                let data = {
                    category_id,
                    name,
                    status,
                };
                if (req.file)
                    data = Object.assign(Object.assign({}, data), { photo: req.file.path });
                const sub_category = yield new subCategory_1.default(data).save();
                res.send(sub_category);
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.SubCategoryController = SubCategoryController;
