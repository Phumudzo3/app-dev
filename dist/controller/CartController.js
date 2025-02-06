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
exports.CartController = void 0;
const Cart_1 = require("../models/Cart");
class CartController {
    static addToCart(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const user_id = req.user.aud;
            try {
                let cartData = {
                    //user_id,
                    products: JSON.parse(data.products),
                    address: data.address,
                    status: data.status,
                    total: data.total,
                    // grandTotal: data.grandTotal,
                    // deliveryCharge: data.deliveryCharge,
                };
                if (data.instruction)
                    cartData = Object.assign(Object.assign({}, cartData), { instruction: data.instruction });
                let update_cart = yield Cart_1.default.findOneAndUpdate({ user_id }, Object.assign({}, cartData), {
                    new: true,
                    projection: {
                        __v: 0, user_id: 0, _id: 0
                    }
                });
                if (!update_cart) {
                    cartData = Object.assign(Object.assign({}, cartData), { user_id });
                    const cart = yield new Cart_1.default(cartData).save();
                }
                const cart = yield new Cart_1.default(cartData).save();
                update_cart = {
                    products: cart.products,
                    instruction: cart.instruction || null,
                    //gradTotal:cart.grandTotal,
                    total: cart.total,
                    status: cart.status,
                    created_at: cart.created_at,
                    updated_at: cart.updated_at,
                };
                res.send(update_cart);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static getUserCart(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = req.user.aud;
            try {
                const cart = yield Cart_1.default.find({ user_id }, { user_id: 0, __V: 0, _id: 0 });
                res.send(cart);
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.CartController = CartController;
