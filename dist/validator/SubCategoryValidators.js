"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryValidators = void 0;
const express_validator_1 = require("express-validator");
class SubCategoryValidators {
    static addSubCategory() {
        return [
            (0, express_validator_1.body)("category_id", "category is required").isString(),
            (0, express_validator_1.body)("name", "Name is required").isString(),
            (0, express_validator_1.body)("status", "Status is required").isString(),
        ];
    }
}
exports.SubCategoryValidators = SubCategoryValidators;
