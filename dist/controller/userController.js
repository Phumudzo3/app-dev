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
exports.userController = void 0;
const Utils_1 = require("../utils/Utils");
// import { NodeMailer } from "../utils/NodeMailer";
const Jwt_1 = require("../utils/Jwt");
const User_1 = require("../models/User");
const Redis_1 = require("../utils/Redis");
const moment = require("moment");
const ExcelJS = require('exceljs');
class userController {
    static registerUserViaPhone(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const phone = req.query.phone;
            let user = req.user;
            const verification_token = Utils_1.Utils.generateVerificationToken(4);
            try {
                if (!user) {
                    const data = {
                        phone,
                        type: "user",
                        status: "active",
                        verification_token: verification_token,
                        verification_token_time: Date.now() + new Utils_1.Utils().MAX_TOKEN_TIME,
                    };
                    user = yield new User_1.default(data).save();
                    if (!user)
                        throw new Error("User not registered,Please try again");
                }
                else {
                    user = yield User_1.default.findOneAndUpdate(user._id, {
                        verification_token,
                        verification_token_time: Date.now() + new Utils_1.Utils().MAX_TOKEN_TIME,
                        updated_at: new Date(),
                    }, {
                        new: true,
                        projection: {
                            verification_token: 0,
                            verification_token_time: 0,
                            password: 0,
                            reset_password_token: 0,
                            reset_password_token_time: 0,
                            __v: 0,
                            _id: 0,
                        },
                    });
                }
                const user_data = {
                    email: user.email || null,
                    email_verified: user.account_verified,
                    phone: user.phone,
                    name: user.name || null,
                    photo: user.photo || null,
                    type: user.type,
                    status: user.status,
                    created_at: user.created_at,
                    updated_at: user.updated_at,
                };
                const payload = {
                    //aud:user._id,
                    phone: user.phone,
                    type: user.type,
                };
                res.json({
                    success: true,
                    // user:user_data
                });
                // await NodeMailer.sendMail({
                //   to:[user.email],
                //   subject: 'Resend Email verification',
                //   html : `<h1>your otp id ${verification_token}</h1>`
                // });
            }
            catch (e) {
                next(e);
            }
        });
    }
    static otpLogin(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const phone = req.query.phone;
            const opt = req.query.otp;
            try {
                const user = yield User_1.default.findOneAndUpdate({
                    phone,
                    verification_token: opt,
                    //verification_token_time: { $gt: Date.now() },
                }, {
                    account_verified: true,
                    updated_at: new Date(),
                }, {
                    new: true,
                    projection: {
                        verification_token: 0,
                        verification_token_time: 0,
                        password: 0,
                        reset_password_token: 0,
                        reset_password_token_time: 0,
                        __v: 0,
                        // _id:0
                    },
                });
                console.log("User Query Result:", user); // Log query result
                if (!user) {
                    throw new Error("wrong OTP has expired,Please try again");
                }
                const user_data = {
                    email: user.email || null,
                    email_verified: user.account_verified,
                    phone: user.phone,
                    name: user.name || null,
                    photo: user.photo || null,
                    type: user.type,
                    status: user.status,
                    created_at: user.created_at,
                    updated_at: user.updated_at,
                };
                const payload = {
                    //aud:user._id,
                    phone: user.phone,
                    type: user.type,
                };
                const access_token = Jwt_1.Jwt.jwtSign(payload, user._id);
                const refresh_token = yield Jwt_1.Jwt.jwtSignRefreshToken(payload, user._id);
                res.json({
                    token: access_token,
                    refreshToken: refresh_token,
                    user: user_data,
                });
            }
            catch (e) {
                next(e);
            }
            console.log("Phone:", phone, "OTP:", opt);
        });
    }
    static signup(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            //  console.log(Utils.generateVerificationToken())
            const name = req.body.name;
            const email = req.body.email;
            const photo = req.body.email;
            const phone = req.body.phone;
            const password = req.body.password;
            const type = req.body.type;
            const status = req.body.status;
            const verification_token = Utils_1.Utils.generateVerificationToken();
            try {
                const hash = yield Utils_1.Utils.encryptPassword(password);
                const data = {
                    email,
                    verification_token,
                    verification_token_time: Date.now() + new Utils_1.Utils().MAX_TOKEN_TIME,
                    password: hash,
                    phone,
                    name,
                    type,
                    photo,
                    status,
                };
                let user = yield new User_1.default(data).save();
                const user_data = {
                    email: user.email,
                    email_verified: user.account_verified,
                    phone: user.phone,
                    name: user.name,
                    photo: user.photo || null,
                    type: user.type,
                    status: user.status,
                    created_at: user.created_at,
                    updated_at: user.updated_at,
                };
                const payload = {
                    //aud:user._id,
                    email: user.email,
                    type: user.type,
                };
                const access_token = Jwt_1.Jwt.jwtSign(payload, user._id);
                const refresh_token = yield Jwt_1.Jwt.jwtSignRefreshToken(payload, user._id);
                res.json({
                    token: access_token,
                    refreshToken: refresh_token,
                    user: user,
                });
                //send email  to user for verification
                // await NodeMailer.sendMail({
                //   to: [user.email],
                //   subject: "Email Verification",
                //   html: `<h1>your otp id ${verification_token}</h1>`,
                // });
                //return res.send(user)
            }
            catch (e) {
                next(e);
            }
        });
    }
    static verifyUserEmailToken(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = req.user.email;
            const verification_token = req.body.verification_token;
            try {
                const user = yield User_1.default.findOneAndUpdate({
                    email: email,
                    verification_token: verification_token,
                    verification_token_time: { $gt: Date.now() },
                }, {
                    account_verified: true,
                    updated_at: new Date(),
                }, {
                    new: true,
                    projection: {
                        verification_token: 0,
                        verification_token_time: 0,
                        password: 0,
                        reset_password_token: 0,
                        reset_password_token_time: 0,
                        __v: 0,
                        _id: 0,
                    },
                });
                if (user) {
                    res.send(user);
                }
                else {
                    throw new Error("wrong otp or Email verification token is expired.Please try again");
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static resendVerificationEmail(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = req.user.email;
            const verification_token = Utils_1.Utils.generateVerificationToken();
            try {
                const user = yield User_1.default.findOneAndUpdate({ email: email }, {
                    updated_at: new Date(),
                    verification_token: verification_token,
                    verification_token_time: Date.now() + new Utils_1.Utils().MAX_TOKEN_TIME,
                }, {
                    account_verified: true,
                });
                if (user) {
                    res.json({ success: true });
                    // await NodeMailer.sendMail({
                    //   to: [user.email],
                    //   subject: "Resend Email verification",
                    //   html: `<h1>your otp id ${verification_token}</h1>`,
                    // });
                }
                else {
                    console.log("User doesn't exist");
                    throw new Error("Invalid login credentials");
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.user;
            const password = req.query.password;
            const data = {
                password,
                encrypt_password: user.password,
            };
            try {
                yield Utils_1.Utils.comparePassword(data);
                const payload = {
                    //aud= user_id
                    //aud:user._id,
                    email: user.email,
                    type: user.type,
                };
                console.log(user._id);
                const access_token = Jwt_1.Jwt.jwtSign(payload, user._id);
                const refresh_token = yield Jwt_1.Jwt.jwtSignRefreshToken(payload, user.id);
                const user_data = {
                    email: user.email,
                    email_veriffied: user.email_verified,
                    phone: user.phone,
                    photo: user.photo || null,
                    name: user.name,
                    type: user.type,
                    status: user.status,
                    created_at: user.created_at,
                    updated_at: user.updated_at,
                };
                res.json({
                    token: access_token,
                    refreshToken: refresh_token,
                    user: user_data,
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    static sendResetPasswordOTP(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = req.query.email;
            const reset_password_token = Utils_1.Utils.generateVerificationToken();
            try {
                const user = yield User_1.default.findOneAndUpdate({ email: email }, {
                    updated_at: new Date(),
                    reset_password_token: reset_password_token,
                    reset_password_token_time: Date.now() + new Utils_1.Utils().MAX_TOKEN_TIME,
                }, {
                    account_verified: true,
                });
                if (user) {
                    res.json({ success: true });
                    // await NodeMailer.sendMail({
                    //   to: [user.email],
                    //   subject: "Reset password Email verification otp",
                    //   html: `<h1>your otp id ${reset_password_token}</h1>`,
                    // });
                }
                else {
                    console.log("User doesn't exist");
                    throw new Error("Invalid login credentials");
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static verifyResetPasswordToken(req, res, next) {
        res.json({ success: true });
    }
    static resetpassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.user;
            const new_password = req.body.new_password;
            try {
                const encryptedPassword = yield Utils_1.Utils.encryptPassword(new_password);
                const updatedUser = yield User_1.default.findByIdAndUpdate(user._id, {
                    updated_at: new Date(),
                    password: encryptedPassword,
                }, {
                    new: true,
                    projection: {
                        verification_token: 0,
                        verification_token_time: 0,
                        password: 0,
                        reset_password_token: 0,
                        reset_password_token_time: 0,
                        __v: 0,
                        _id: 0,
                    },
                });
                if (updatedUser) {
                    res.send(updatedUser);
                }
                else {
                    throw new Error("user doesn\t exist");
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static profile(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.user;
            try {
                const profile = yield User_1.default.findById(user.aud);
                if (profile) {
                    const user_data = {
                        email: profile.email,
                        email_veriffied: profile.account_verified,
                        phone: profile.phone,
                        photo: profile.photo || null,
                        name: profile.name,
                        type: profile.type,
                        status: profile.status,
                        created_at: profile.created_at,
                        updated_at: profile.updated_at,
                    };
                    res.send(user_data);
                }
                else {
                    throw new Error("user doesn\t exist");
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static updatePhoneNumber(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.user;
            const phone = req.body.phone;
            try {
                const userData = yield User_1.default.findByIdAndUpdate(user.aud, { phone: phone, updated_at: new Date() }, { new: true });
                res.send(userData);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static updateCustomerProfile(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.user;
            const name = req.body.name;
            const email = req.body.email;
            //const verification_token=Utils.generateVerificationToken();
            try {
                const userData = yield User_1.default.findById(user.aud);
                if (!userData)
                    throw new Error("user doesn't exist");
                const updatedUser = yield User_1.default.findByIdAndUpdate(user.aud, {
                    //phone:phone,
                    name: name,
                    email: email,
                    // account_verified:true,
                    // verification_token:false,
                    // verification_token_time:Date.now() + new Utils().MAX_TOKEN_TIME,
                    updated_at: new Date(),
                }, {
                    new: true,
                    projection: {
                        verification_token: 0,
                        verification_token_time: 0,
                        password: 0,
                        reset_password_token: 0,
                        reset_password_token_time: 0,
                        __v: 0,
                        _id: 0,
                    },
                });
                if (!updatedUser) {
                    throw new Error("Failed to update user profile");
                }
                // const payload={
                //   //aud:user.aud,
                //   phone:updatedUser.phone,
                //   type:updatedUser.type
                // };
                // const access_token =Jwt.jwtSign(payload,user.aud);
                // const refresh_token =await Jwt.jwtSignRefreshToken(payload,user.aud);
                res.json({
                    // token:access_token,
                    // refreshToken:refresh_token,
                    user: updatedUser,
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    static updateUserProfile(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.user;
            const phone = req.body.phone;
            const new_email = req.body.email;
            const plain_password = req.body.password;
            const verification_token = Utils_1.Utils.generateVerificationToken();
            try {
                const userData = yield User_1.default.findById(user.aud);
                if (!userData)
                    throw new Error("user doesn't exist");
                yield Utils_1.Utils.comparePassword({
                    password: plain_password,
                    encrypt_password: userData.password,
                });
                if (!userData) {
                    throw new Error("Incorrect password");
                }
                const updatedUser = yield User_1.default.findByIdAndUpdate(user.aud, {
                    phone: phone,
                    email: new_email,
                    email_verified: true,
                    verification_token,
                    verification_token_time: Date.now() + new Utils_1.Utils().MAX_TOKEN_TIME,
                    updated_at: new Date(),
                }, {
                    new: true,
                    projection: {
                        verification_token: 0,
                        verification_token_time: 0,
                        password: 0,
                        reset_password_token: 0,
                        reset_password_token_time: 0,
                        __v: 0,
                        _id: 0,
                    },
                });
                if (!updatedUser) {
                    throw new Error("Failed to update user profile");
                }
                const payload = {
                    //aud:user.aud,
                    email: updatedUser.email,
                    type: updatedUser.type,
                };
                const access_token = Jwt_1.Jwt.jwtSign(payload, user.aud);
                const refresh_token = yield Jwt_1.Jwt.jwtSignRefreshToken(payload, user.aud);
                res.json({
                    token: access_token,
                    refreshToken: refresh_token,
                    user: updatedUser,
                });
                console.log(access_token);
                console.log("Updated user:", updatedUser);
                console.log("Fetched user:", userData);
                //send email  to updated user for verification
                // await NodeMailer.sendMail({
                //   to: [updatedUser.email],
                //   subject: "Email Verification",
                //   html: `<h1>your otp id ${verification_token}</h1>`,
                // });
            }
            catch (e) {
                next(e);
            }
        });
    }
    static getNewTokens(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            //const refreshToken=req.body.refreshToken;
            const decoded_data = req.user;
            try {
                if (decoded_data) {
                    const payload = {
                        //aud= user_id
                        //aud:user._id,
                        email: decoded_data.email,
                        type: decoded_data.type,
                    };
                    console.log(decoded_data.aud);
                    const access_token = Jwt_1.Jwt.jwtSign(payload, decoded_data.aud);
                    const refresh_token = yield Jwt_1.Jwt.jwtSignRefreshToken(payload, decoded_data.aud);
                    res.json({
                        accesstoken: access_token,
                        refreshToken: refresh_token,
                    });
                }
                else {
                    req.errorStatus = 403;
                    //throw new error( access is forbidden)
                    throw "access is forbidden";
                }
            }
            catch (e) {
                req.errorStatus = 403;
                next(e);
            }
        });
    }
    static logout(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            //const refreshToken=req.body.refreshToken;
            const decoded_data = req.user;
            try {
                if (decoded_data) {
                    //delete refresh token
                    yield Redis_1.Redis.deleteKey(decoded_data.aud);
                    res.json({
                        success: true,
                    });
                }
                else {
                    req.errorStatus = 403;
                    //throw new error( access is forbidden)
                    throw "access is forbidden";
                }
            }
            catch (e) {
                req.errorStatus = 403;
                next(e);
            }
        });
    }
    static updateUserProfilePic(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = req.file.path;
            const user = req.user;
            try {
                const updatedUser = yield User_1.default.findByIdAndUpdate(user.aud, {
                    photo: path,
                    updated_at: new Date(),
                }, {
                    new: true,
                    projection: {
                        verification_token: 0,
                        verification_token_time: 0,
                        password: 0,
                        reset_password_token: 0,
                        reset_password_token_time: 0,
                        __v: 0,
                        _id: 0,
                    },
                });
                res.send(updatedUser);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static exportUsersToExcel(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const startDate = moment(new Date()).startOf('month').toDate();
            const endDate = moment(new Date()).startOf('month').toDate();
            try {
                const users = yield User_1.default.find({
                    // created_at:{
                    //   $gte :startDate,
                    //   $lte:endDate
                    // },
                    type: 'user'
                });
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('user');
                worksheet.columns = [
                    { header: 'SL NO.', key: 's_no', width: 10 },
                    { header: 'NAME.', key: 'name', width: 10 },
                    { header: 'EMAIL .', key: 'email', width: 10 },
                    { header: 'EMAIL VERIFIED.', key: 'email_verified', width: 10 },
                    { header: 'PHONE.', key: 'phone', width: 10 },
                ];
                let count = 1;
                users.forEach((user) => {
                    user.s_no = count;
                    worksheet.addRow(user);
                    count++;
                });
                worksheet.getRow(1).eachCell((cell) => {
                    cell.font = { bold: true };
                });
                const data = yield workbook.xlsx.writeFile('users.xlsx');
                res.send('exprted successfully!');
                count++;
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.userController = userController;
