"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreValidators = void 0;
const express_validator_1 = require("express-validator");
const User_1 = require("../models/User");
class StoreValidators {
    static addStore() {
        return [
            (0, express_validator_1.body)("name", "Owner Name is required").isString(),
            (0, express_validator_1.body)("email", " Email is required")
                .isEmail()
                .custom((email, { req }) => {
                //if(req.user.email==email) throw ("please provide a new unique email to update the user profile");
                return User_1.default.findOne({
                    email: email,
                })
                    .then((user) => {
                    if (user) {
                        //throw('User does not exist');
                        throw "user already exist,please provide unique email id";
                    }
                    else {
                        return true;
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
            }),
            (0, express_validator_1.body)("storeImages", "store Image is required").custom((storeImage, { req }) => {
                if (req.file) {
                    return true;
                }
                else {
                    //file not upload
                    throw "file not uploaded";
                }
            }),
            (0, express_validator_1.body)("phone", " Phone is required").isString()
                .custom((phone, { req }) => {
                //if(req.user.email==email) throw ("please provide a new unique email to update the user profile");
                return User_1.default.findOne({
                    phone: phone,
                    type: 'store'
                })
                    .then((user) => {
                    if (user) {
                        //throw('User does not exist');
                        throw "user already exist,please provide unique email id";
                    }
                    else {
                        return true;
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
            }),
            (0, express_validator_1.body)("password", "Password is required")
                .isAlphanumeric()
                .isLength({ min: 8, max: 25 }),
            (0, express_validator_1.body)("store_name", "Restaurant Name is required").isString(),
            (0, express_validator_1.body)("status", "Status is required").isString(),
            (0, express_validator_1.body)("address", "Address is required").isString(),
            (0, express_validator_1.body)("location", "Location is required").isString(),
            (0, express_validator_1.body)("city_id", "City id is required").isString(),
        ];
    }
    static searchStores() {
        return [(0, express_validator_1.query)("name", " search query is required").isString()];
    }
}
exports.StoreValidators = StoreValidators;
