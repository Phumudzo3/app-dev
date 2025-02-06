"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressValidators = void 0;
const express_validator_1 = require("express-validator");
class AddressValidators {
    static addAddress() {
        return [
            (0, express_validator_1.body)("title", "title is required").isString(),
            (0, express_validator_1.body)("landmark", "landmark is required").isString(),
            (0, express_validator_1.body)("address", "address is required").isString(),
            (0, express_validator_1.body)("house", "house is required").isString(),
            (0, express_validator_1.body)("lat", "lat is required").isNumeric(),
            (0, express_validator_1.body)("long", "long is required").isNumeric(),
        ];
    }
    static getNearByRestaurants() {
        return [
            (0, express_validator_1.query)("long", " Longitude is required").isNumeric(),
            (0, express_validator_1.query)("lat", "Latitude is required").isNumeric(),
            (0, express_validator_1.query)("radius", " Radius is required").isNumeric(),
        ];
    }
    static editAddress() {
        return [
            (0, express_validator_1.body)("title", "title is required").isString(),
            (0, express_validator_1.body)("landmark", "landmark is required").isString(),
            (0, express_validator_1.body)("address", "address is required").isString(),
            (0, express_validator_1.body)("house", "house is required").isString(),
            (0, express_validator_1.body)("lat", "lat is required").isNumeric(),
            (0, express_validator_1.body)("long", "long is required").isNumeric(),
        ];
    }
    static checkAddress() {
        return [
            (0, express_validator_1.query)("lat", "lat is required").isNumeric(),
            (0, express_validator_1.query)("long", "long is required").isNumeric(),
        ];
    }
    static getLimitedAddresses() {
        return [(0, express_validator_1.query)("limit", "address limit is required").isNumeric()];
    }
}
exports.AddressValidators = AddressValidators;
