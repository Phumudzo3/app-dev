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
exports.OrderController = void 0;
const Order_1 = require("../models/Order");
const Product_1 = require("../models/Product");
const Cart_1 = require("../models/Cart");
const Stripe_1 = require("../utils/Stripe");
class OrderController {
    static placeOrder(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const user_id = req.user.aud;
            try {
                // if (req.user.type != "user") {
                //   throw "you are not authorized";
                // }
                let products = JSON.parse(data.products);
                let orderData = {
                    user_id,
                    products: products,
                    address: JSON.parse(data.address),
                    status: data.status,
                    payment_status: data.payment_status,
                    payment_mode: data.payment_mode,
                    total: data.total,
                    grandTotal: data.grandTotal,
                    deliveryCharge: data.deliveryCharge,
                };
                console.log("Incoming Request Body:", req.body);
                console.log("User ID:", user_id);
                console.log("Restaurant:", req.restaurant);
                if (data.instruction)
                    orderData = Object.assign(Object.assign({}, orderData), { instruction: data.instruction });
                const order = yield new Order_1.default(orderData).save();
                // // delete order.user_id;
                // // delete order.__v;
                //CHECK ADDRESS BEFORE PLACE ORDER ,CLEAR CAR AND UPDATE PRODUCT STOCK AND METRIC
                yield Cart_1.default.findOneAndDelete({ user_id });
                req.server_products.map((server_product) => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    let product = products.find(x => x._id == server_product._id);
                    if (((_a = server_product.variations) === null || _a === void 0 ? void 0 : _a.length) == 0) {
                        yield Product_1.default.findByIdAndUpdate(product._id, {
                            $inc: { stock_unit: -1 * product.quantity, "metrics.orders": 1 },
                        });
                    }
                    else {
                        let variation = server_product.variations.find(variation => variation.sku && variation.sku);
                        if (variation) {
                            yield Product_1.default.findByIdAndUpdate({
                                _id: product._id,
                                "variations.sku": product.sku,
                            }, {
                                $inc: {
                                    "variations.$.stock_unit": (-1) * product.quanity,
                                    "metric.orders": 1,
                                },
                            });
                        }
                        else {
                            //let data=variation.size.find(x=>x.sku && x.sku ==product.sku);
                            yield Product_1.default.findOneAndUpdate({
                                _id: product._id,
                                "variations.sku": product.sku,
                            }, {
                                $inc: {
                                    stock_unit: (-1) * product.quantity,
                                    "metrics.orders": 1,
                                }
                            });
                        }
                    }
                }));
                const response_order = {
                    address: order.address,
                    products: order.products,
                    instruction: order.instruction,
                    grandTotal: order.grandTotal,
                    total: order.total,
                    deliveryCharge: order.deliveryCharge,
                    status: order.status,
                    payment_status: order.payment_status,
                    payment_mode: order.payment_mode,
                    created_at: order.created_at,
                    updated_at: order.updated_at,
                };
                res.send(response_order);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static getUserOrders(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = req.user.aud;
            const perPage = 1;
            const currentPage = parseInt(req.query.page) || 1;
            const prevPage = currentPage == 1 ? null : currentPage - 1;
            let nextPage = currentPage + 1;
            try {
                const orders_doc_count = yield Order_1.default.countDocuments({ user_id: user_id });
                if (!orders_doc_count) {
                    //send empty arrAy if no document on filfter query exist
                    return res.json({
                        orders: [],
                        perPage,
                        currentPage,
                        prevPage,
                        nextPage: null,
                        totalPages: 0,
                        // totalRecords:order_doc_count
                    });
                }
                const totalPages = Math.ceil(orders_doc_count / perPage);
                if (totalPages == 0 || totalPages == currentPage) {
                    nextPage = 0;
                }
                if (totalPages < currentPage) {
                    //thorw error(no more available
                    throw "No more Orders available";
                }
                const orders = yield Order_1.default.find({ user_id }, { user_id: 0, __V: 0 })
                    .skip(perPage * currentPage - perPage)
                    .limit(perPage)
                    .sort({ created_at: -1 })
                    .exec();
                res.json({
                    orders,
                    perPage,
                    currentPage,
                    prevPage,
                    nextPage,
                    totalPages,
                    // totalRecords:order_doc_count
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    static stripeCheckout(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                // Parse the order data
                const orderData = {
                    products: JSON.parse(data.order), // Ensure the `order` key in `data` contains a valid JSON string
                    deliveryCharge: data.deliveryCharge, // Additional fields if needed
                };
                // Call the Stripe checkout service
                const session = yield Stripe_1.StripeService.checkout(orderData);
                // Send the session data to the client
                return res.status(200).json(session);
            }
            catch (error) {
                console.error("Error in stripeCheckout:", error.message);
                res.status(500).json({ error: error.message });
                next(error); // Forward the error to the global error handler if applicable
            }
        });
    }
}
exports.OrderController = OrderController;
