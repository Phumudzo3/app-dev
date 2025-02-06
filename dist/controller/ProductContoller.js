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
exports.ProductController = void 0;
const Category_1 = require("../models/Category");
const Product_1 = require("../models/Product");
class ProductController {
    static addItem(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const productData = req.body;
            const files = req.files;
            try {
                //create item
                let product_data = {
                    store_id: productData.store_id,
                    product_name: productData.product_name,
                    status: productData.status,
                    description: productData.description,
                    price: parseInt(productData.price),
                    category_id: productData.category_id,
                    //cover: path,
                };
                if (productData.variations)
                    product_data = Object.assign(Object.assign({}, product_data), { variations: productData.variations });
                if (productData.specifications)
                    if (productData.description)
                        product_data = Object.assign(Object.assign({}, product_data), { description: productData.description });
                if (productData.specifications)
                    product_data = Object.assign(Object.assign({}, product_data), { specifications: productData.specifications });
                if (productData.sub_category_id)
                    product_data = Object.assign(Object.assign({}, product_data), { sub_category_id: productData.sub_category_id });
                if (productData.sku)
                    product_data = Object.assign(Object.assign({}, product_data), { sku: productData.sku });
                if (productData.price)
                    product_data = Object.assign(Object.assign({}, product_data), { price: productData.price });
                if (productData.stock_unit)
                    product_data = Object.assign(Object.assign({}, product_data), { stock_unit: productData.stock_unit });
                if (files) {
                    let images = [];
                    images = files.map((x) => x.path);
                    product_data = Object.assign(Object.assign({}, product_data), { images });
                }
                console.log(product_data);
                const itemDoc = yield new Product_1.default(product_data).save();
                res.send(itemDoc);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static getProductByCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category_id = req.query.category_id;
                const sub_category_id = req.query.sub_category_id;
                let query = {
                    status: true,
                    category_id
                };
                if (sub_category_id) {
                    query = Object.assign(Object.assign({}, query), { sub_category_id });
                }
                const products = yield Product_1.default.find(query);
                res.json({
                    products
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    static getMenu(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurant = req.restaurant;
            try {
                const restaurant_id = req.params.restaurantId;
                const categories = yield Category_1.default.find({ restaurant_id: restaurant_id }, { __v: 0 });
                const items = yield Product_1.default.find({
                    // status:true,
                    restaurant_id: restaurant_id,
                });
                res.json({
                    restaurant,
                    categories,
                    items,
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.ProductController = ProductController;
