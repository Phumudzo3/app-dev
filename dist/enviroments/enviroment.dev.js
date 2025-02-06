"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevEnviroment = void 0;
const Utils_1 = require("../utils/Utils");
Utils_1.Utils.dotenvConfigs();
exports.DevEnviroment = {
    db_url: process.env.DEV_DB_URL,
    jwt_secret_key: process.env.DEV_JWT_SECRET_KEY,
    jwt_refresh_secret_key: process.env.DEV_REFRESH_TOKEN_SECRET,
    sendgrid: {
        api_key: process.env.DEV_SENDGRID_API_KEY,
        email_from: process.env.DEV_SENDGRID_EMAIL_FROM,
    },
    gmail_auth: {
        user: process.env.DEV_GMAIL_USER,
        pass: process.env.DEV_GMAIL_PASS,
    },
    // redis:{
    //     username:process.env.SERVER_REDIS_USERNAME,
    //     password:process.env.SERVER_REDIS_PASSWORD,
    //     host:process.env.SERVER_REDIS_HOST,
    //     port:process.env.SERVER_REDIS_PORT,
    // }
    redis: {
        username: '',
        password: '',
        host: process.env.LOCAL_REDIS_HOST,
        port: process.env.LOCAL_REDIS_PORT,
    },
    stripe: {
        publishable_key: process.env.DEV_STRPE_PUBLISHABLE_KEY,
        secret_key: process.env.DEV_STRIPE_SECRET_KEY
    }
};
