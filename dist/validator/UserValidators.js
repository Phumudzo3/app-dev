"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidators = void 0;
const express_validator_1 = require("express-validator");
const User_1 = require("../models/User");
class UserValidators {
    static registerUserViaPhone() {
        return [
            (0, express_validator_1.query)("phone", "Phone number is required")
                .isString()
                .custom((phone, { req }) => {
                return User_1.default.findOne({
                    phone: phone,
                    type: "user",
                })
                    .then((user) => {
                    if (user) {
                        req.user = user;
                        req.register = true;
                        //throw('User already Exists');
                    }
                    else {
                        req.user = null; // Explicitly set to null
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
            }),
        ];
    }
    static optLogin() {
        return [
            (0, express_validator_1.query)("phone", "Phone number is required").isString(),
            (0, express_validator_1.query)("otp", "PTP is required").isNumeric(),
        ];
    }
    static signup() {
        return [
            (0, express_validator_1.body)("name", "Name is required").isString(),
            (0, express_validator_1.body)("phone", "Phone number is required").isString(),
            (0, express_validator_1.body)("email", "Email is required")
                .isEmail()
                .custom((email, { req }) => {
                return User_1.default.findOne({
                    email: email,
                    //  type:type
                })
                    .then((user) => {
                    if (user) {
                        throw "User already Exists";
                    }
                    else {
                        return true;
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
            }),
            (0, express_validator_1.body)("phone", "Phone is required").isString(),
            (0, express_validator_1.body)("password", "Password is required")
                .isAlphanumeric()
                .isLength({ min: 8, max: 25 })
                .withMessage("password must be between 8 -20 characters"),
            (0, express_validator_1.body)("type", "user role type is required").isString(),
            (0, express_validator_1.body)("status", "status role type is required").isString(),
        ];
    }
    static verifyUserEmailToken() {
        return [
            (0, express_validator_1.body)("verification_token", "verification token is required").isString(),
        ];
    }
    static login() {
        return [
            (0, express_validator_1.body)("email", "Email is required")
                .isEmail()
                .custom((email, { req }) => {
                return User_1.default.findOne({
                    email: email,
                })
                    .then((user) => {
                    if (user) {
                        if (user.type == "user" || user.type == "admin" || user.type == "store") {
                            req.user = user;
                            console.log("you are logged in");
                            return true;
                        }
                        else {
                            //you are not authorized user
                            throw "You are not an authorized user";
                        }
                    }
                    else {
                        //you are not authorized user
                        throw "You are not an authorized user";
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
            }),
            (0, express_validator_1.query)("password", "Password is required").isAlphanumeric(),
        ];
    }
    static checkResetPasowrdEmail() {
        return [
            (0, express_validator_1.body)("email", "Email is required")
                .isEmail()
                .custom((email, { req }) => {
                return User_1.default.findOne({
                    email: email,
                })
                    .then((user) => {
                    if (user) {
                        return true;
                    }
                    else {
                        throw "User does not exist";
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
            }),
        ];
    }
    static verifyResetPasswordToken() {
        return [
            (0, express_validator_1.query)("email", "Email is required").isEmail(),
            (0, express_validator_1.query)("reset_password_token", "Reset password token is required")
                .isNumeric()
                .custom((reset_password_token, { req }) => {
                return User_1.default.findOne({
                    email: req.email,
                    reset_password_token: reset_password_token,
                    reset_password_token_time: { $gt: Date.now() },
                })
                    .then((user) => {
                    if (user) {
                        return true;
                    }
                    else {
                        //throw('User does not exist');
                        throw "Reset password token doesn\t exit,please regenerate a new token";
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
            }),
        ];
    }
    static resetpassword() {
        return [
            (0, express_validator_1.body)("email, email is required")
                .isEmail()
                .custom((email, { req }) => {
                User_1.default.findOne({
                    email: email,
                })
                    .then((user) => {
                    if (user) {
                        req.user = user;
                        return true;
                    }
                    else {
                        //throw('User does not exist');
                        throw "No user is found";
                    }
                })
                    .catch((e) => {
                    throw new Error(e);
                });
                (0, express_validator_1.body)("new_password", "new password is required").isAlphanumeric(),
                    (0, express_validator_1.body)("otp", "Reset password token is required")
                        .isNumeric()
                        .custom((reset_password_token, { req }) => {
                        if (req.user.reset_password_token == reset_password_token) {
                            return true;
                        }
                        else {
                            req.errorStatus = 422;
                            throw "Reset token is invalid,Please try again";
                        }
                    });
            }),
        ];
    }
    static verifyPhoneNumber() {
        return [(0, express_validator_1.body)("phone", "Phone is required").isString()];
    }
    static verifyUserProfile() {
        return [
            (0, express_validator_1.body)("phone", "Phone is required").isString(),
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
            (0, express_validator_1.body)("password", "Password is required").isAlphanumeric(),
        ];
    }
    static verifyCustomerProfile() {
        return [
            (0, express_validator_1.body)("name", "name is required").isString(),
            (0, express_validator_1.body)("email", " Email is required")
                .isEmail()
                .custom((email, { req }) => {
                //if(req.user.email==email) throw ("please provide a new unique email to update the user profile");
                return User_1.default.findOne({
                    email: email,
                    type: "user",
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
        ];
    }
    // static checkRefreshToken(){
    //   return[
    //     body('refreshToken','refresh token is required').isString()
    //     .custom((refreshToken,{req})=>{
    // if(refreshToken){
    //   return true;
    // }else{
    //   req.errorStatus=403;
    //   //throw new error( access is forbidden)
    //   throw ( "access is forbidden");
    // }
    //     })
    //   ]
    // }
    static userProfilePic() {
        return [
            (0, express_validator_1.body)("profileImages", "profile Image is required").custom((profileImage, { req }) => {
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
exports.UserValidators = UserValidators;
