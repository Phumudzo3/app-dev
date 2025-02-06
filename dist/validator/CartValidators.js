"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartValidators = void 0;
const express_validator_1 = require("express-validator");
class CartValidators {
    static addToCart() {
        return [
            (0, express_validator_1.body)("products", "products items is required").isString(),
            (0, express_validator_1.body)("status", "Order status is required").isString(),
            (0, express_validator_1.body)("total", "Cart total is required").isNumeric(),
            //   body("grandTotal", "grand total is required").isNumeric(),
            //   body("deliveryCharge", "delivery charge is required").isNumeric(),
        ];
    }
}
exports.CartValidators = CartValidators;
