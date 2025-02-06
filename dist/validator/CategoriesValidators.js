"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryValidators = void 0;
const express_validator_1 = require("express-validator");
class CategoryValidators {
    static addCategory() {
        return [
            (0, express_validator_1.body)("name", "Name is required").isString(),
            (0, express_validator_1.body)("status", "Status is required").isString(),
        ];
    }
}
exports.CategoryValidators = CategoryValidators;
