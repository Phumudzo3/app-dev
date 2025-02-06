"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const Bcrypt = require("bcrypt");
const Multer = require("multer");
const dotenv = require("dotenv");
const storageOptions = Multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/uploads/" + file.fieldname);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + file.originalname);
    },
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};
class Utils {
    constructor() {
        this.MAX_TOKEN_TIME = 5 * 60 * 1000;
        this.multer = Multer({ storage: storageOptions, fileFilter });
        // currentDate(){
        //   return new Date().toLocaleDateString('en-US',{
        //     timeZone: 'Johannesburg'
        //    });
        // }
    }
    static generateVerificationToken(digit = 6) {
        const digits = "0123456789";
        let otp = "";
        for (let i = 0; i < digit; i++) {
            otp += Math.floor(Math.random() * 10);
        }
        // return parseInt(otp);
        return otp;
    }
    static encryptPassword(password) {
        return new Promise((resolve, reject) => {
            Bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(hash);
                }
            });
        });
    }
    static comparePassword(data) {
        return new Promise((resolve, reject) => {
            Bcrypt.compare(data.password, data.encrypt_password, (err, same) => {
                if (err) {
                    reject(err);
                }
                else if (!same) {
                    reject(new Error("user & password doesn/t match!"));
                }
                else {
                    resolve(true);
                }
            });
        });
    }
    static dotenvConfigs() {
        dotenv.config({ path: ".env" });
    }
}
exports.Utils = Utils;
