"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import path = require("path");
const userController_1 = require("../controller/userController");
const UserValidators_1 = require("../validator/UserValidators");
const GlobalMiddleware_1 = require("../middlewares/GlobalMiddleware");
const Utils_1 = require("../utils/Utils");
class UserRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get("/otp_login", UserValidators_1.UserValidators.optLogin(), GlobalMiddleware_1.GlobalMiddleWare.checkError, userController_1.userController.otpLogin);
        this.router.get("/registerUserViaPhone", UserValidators_1.UserValidators.registerUserViaPhone(), GlobalMiddleware_1.GlobalMiddleWare.checkError, userController_1.userController.registerUserViaPhone);
        this.router.get("/send/verification/email", GlobalMiddleware_1.GlobalMiddleWare.auth, userController_1.userController.resendVerificationEmail);
        this.router.get("/login", UserValidators_1.UserValidators.login(), GlobalMiddleware_1.GlobalMiddleWare.checkError, userController_1.userController.login);
        this.router.get("/send/reset/password/token", UserValidators_1.UserValidators.checkResetPasowrdEmail(), GlobalMiddleware_1.GlobalMiddleWare.checkError, userController_1.userController.sendResetPasswordOTP);
        this.router.get("/verify/resetPasswordToken", UserValidators_1.UserValidators.verifyResetPasswordToken(), GlobalMiddleware_1.GlobalMiddleWare.checkError, userController_1.userController.verifyResetPasswordToken);
        this.router.get("/profile", GlobalMiddleware_1.GlobalMiddleWare.auth, userController_1.userController.profile);
        this.router.get("/export", GlobalMiddleware_1.GlobalMiddleWare.auth, userController_1.userController.exportUsersToExcel);
    }
    postRoutes() {
        this.router.post("/signup", UserValidators_1.UserValidators.signup(), GlobalMiddleware_1.GlobalMiddleWare.checkError, userController_1.userController.signup);
        this.router.post("/refreshtoken", GlobalMiddleware_1.GlobalMiddleWare.checkError, GlobalMiddleware_1.GlobalMiddleWare.decodeRefreshToken, userController_1.userController.getNewTokens);
        this.router.post("/logout", GlobalMiddleware_1.GlobalMiddleWare.auth, userController_1.userController.logout);
    }
    patchRoutes() {
        this.router.patch("/reset/password", UserValidators_1.UserValidators.resetpassword(), GlobalMiddleware_1.GlobalMiddleWare.checkError, userController_1.userController.resetpassword);
        this.router.patch("/verify/emailToken", GlobalMiddleware_1.GlobalMiddleWare.auth, UserValidators_1.UserValidators.verifyUserEmailToken(), GlobalMiddleware_1.GlobalMiddleWare.checkError, userController_1.userController.verifyUserEmailToken);
        this.router.patch("/update/phone", GlobalMiddleware_1.GlobalMiddleWare.auth, UserValidators_1.UserValidators.verifyPhoneNumber(), GlobalMiddleware_1.GlobalMiddleWare.checkError, userController_1.userController.updatePhoneNumber);
        this.router.patch("/update/profile", GlobalMiddleware_1.GlobalMiddleWare.auth, UserValidators_1.UserValidators.verifyUserProfile(), GlobalMiddleware_1.GlobalMiddleWare.checkError, userController_1.userController.updateUserProfile);
        this.router.patch("/update/customer_profile", GlobalMiddleware_1.GlobalMiddleWare.auth, UserValidators_1.UserValidators.verifyCustomerProfile(), GlobalMiddleware_1.GlobalMiddleWare.checkError, userController_1.userController.updateCustomerProfile);
    }
    putRoutes() { }
    deleteRoutes() {
        this.router.put("/update/profilepic", GlobalMiddleware_1.GlobalMiddleWare.auth, new Utils_1.Utils().multer.single("profileImages"), UserValidators_1.UserValidators.userProfilePic(), GlobalMiddleware_1.GlobalMiddleWare.checkError, userController_1.userController.updateUserProfilePic);
    }
}
exports.default = new UserRouter().router;
