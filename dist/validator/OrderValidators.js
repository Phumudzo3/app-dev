"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidators = void 0;
const express_validator_1 = require("express-validator");
const Product_1 = require("../models/Product");
class OrderValidators {
    static placeOrder() {
        return [
            (0, express_validator_1.body)("products", "products items is required")
                .isString()
                .custom((products, { req }) => {
                // if (req.user.type != "user") {
                //   throw "You are not authorized to place an order";
                // }
                products = JSON.parse(products);
                const product_ids = products.map(x => x._id);
                req.product_ids = product_ids;
                console.log(product_ids);
                return Product_1.default.find({ _id: { $in: [...product_ids] } })
                    .then((server_products) => {
                    if (!server_products ||
                        server_products.length != products.length) {
                        throw "products mismatched!";
                    }
                    else {
                        req.server_products = server_products;
                        return true;
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
            }),
            (0, express_validator_1.body)("address", "address is required").isString(),
            (0, express_validator_1.body)("status", "status is required").isString(),
            (0, express_validator_1.body)("payment_status", "payment status is required").isBoolean(),
            (0, express_validator_1.body)("payment_mode", "payment mode is required").isString(),
            (0, express_validator_1.body)("grandTotal", "grand total is required").isNumeric(),
            (0, express_validator_1.body)("deliveryCharge", "delivery charge is required").isNumeric(),
            (0, express_validator_1.body)("total", "total is required").isNumeric()
                .custom((total, { req }) => {
                let tot = 0;
                const server_products = req.server_products.map(server_product => {
                    var _a, _b;
                    console.log(server_product);
                    let products = JSON.parse(req.body.products);
                    let product = products.find(x => x._id == server_product._id);
                    if (!product.quantity || product.quantity == 0) {
                        throw "Please provide a proper quantity for " + product.name;
                    }
                    console.log(product);
                    if (((_a = server_product.variations) === null || _a === void 0 ? void 0 : _a.length) == 0) {
                        if (server_product.price != product.price) {
                            console.log("price mismatch");
                            throw ("price mismatch! check the latest price of " + product.name);
                        }
                        tot += server_product.price * parseFloat(product.quantity);
                        return server_product;
                    }
                    else {
                        let variation = server_product.variations.find((variation) => variation.sku && variation.sku == product.sku);
                        if (variation) {
                            if (variation.price != product.price) {
                                throw ("price mismatch! check the latest price of " + product.name);
                            }
                            else if (product.quantity > variation.stock_unit) {
                                throw ("out of stock! " + product.name + " just went out of stock,");
                            }
                            tot += variation.price * parseFloat(product.quantity);
                            return server_product;
                        }
                        else {
                            if (((_b = variation === null || variation === void 0 ? void 0 : variation.size) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                                let data = variation.size.find((x) => x.sku && x.sku == product.sku);
                                if (data) {
                                    if (data.price != product.price) {
                                        throw ("price mismatch! check the latest price of " +
                                            product.name);
                                    }
                                    else if (product.quantity > data.stock_unit) {
                                        throw ("Out of stock! " +
                                            product.name +
                                            " just went out of stock");
                                    }
                                    tot += data.price * parseFloat(product.quantity);
                                    return server_product;
                                }
                            }
                            else {
                                throw "Products mismatched";
                            }
                        }
                    }
                });
                console.log("total, tot");
                const grandTotal = tot + parseFloat(req.body.deliveryCharge);
                console.log("grand total:", grandTotal);
                if (total != tot || req.body.grandTotal != grandTotal) {
                    console.log("throw error");
                    throw ("amount to pay mismatch! total amount should be " + grandTotal);
                }
                else {
                    return true;
                }
            }),
        ];
    }
}
exports.OrderValidators = OrderValidators;
