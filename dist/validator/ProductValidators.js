"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidators = void 0;
const express_validator_1 = require("express-validator");
const Store_1 = require("../models/Store");
const Category_1 = require("../models/Category");
class ProductValidators {
    static addItem() {
        return [
            // body('itemImages', 'item images is required').custom((cover, { req }) => {
            //   if (req.files) {
            //     return true;
            //   } else {
            //     throw 'file not uploaded';
            //   }
            // }),
            (0, express_validator_1.body)("product_name", "Product_name required").isString(),
            (0, express_validator_1.body)("store_id", "store id is required")
                .isString()
                .custom((store_id, { req }) => {
                return Store_1.default.findById(store_id)
                    .then((store) => {
                    if (store) {
                        if (req.user.type == "admin" || store.user_id == req.user.aud)
                            //
                            return true;
                        throw "You are not an Authorized user for this store";
                    }
                    else {
                        throw "store doesnt  Exists";
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
            }),
            (0, express_validator_1.body)("category_id", "Category_id is required")
                .isString()
                .custom((category_id, { req }) => {
                console.log("Category ID:", category_id);
                console.log("Store ID:", req.body.store_id);
                return Category_1.default.findOne({
                    _id: category_id,
                    // store_id: req.body.store_id,
                })
                    .then((category) => {
                    if (category) {
                        return true;
                    }
                    else {
                        throw "Category doesn/t  Exists";
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
            }),
            (0, express_validator_1.body)("price", "Price is required").isString(),
            (0, express_validator_1.body)("status", "Status is required").isBoolean(),
        ];
    }
    static getProductByCategory() {
        return [
            (0, express_validator_1.query)('category_id', 'category id is required')
                .isString()
        ];
    }
}
exports.ProductValidators = ProductValidators;
