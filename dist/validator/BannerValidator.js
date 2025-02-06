"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerValidators = void 0;
const express_validator_1 = require("express-validator");
class BannerValidators {
    static addBanner() {
        return [
            (0, express_validator_1.body)("bannerImages", "Banner images is required").custom((banner, { req }) => {
                if (req.file) {
                    return true;
                }
                else {
                    //file not upload
                    throw "file not uploaded";
                }
            }),
        ];
    }
}
exports.BannerValidators = BannerValidators;
