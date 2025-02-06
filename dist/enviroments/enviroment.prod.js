"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdEnviroment = void 0;
const Utils_1 = require("../utils/Utils");
Utils_1.Utils.dotenvConfigs();
exports.ProdEnviroment = {
    db_url: process.env.PROD_DB_URL,
    jwt_secret_key: process.env.PROD_JWT_SECRET_KEY,
    jwt_refresh_secret_key: process.env.PROD_REFRESH_TOKEN_SECRET,
    sendgrid: {
        api_key: process.env.PROD_SENDGRID_API_KEY,
        email_from: process.env.PROD_SENDGRID_EMAIL_FROM,
    },
    // gmail_auth: {
    //   user: process.env.PROD_GMAIL_USER,
    //   pass: process.env.PROD_GMAIL_PASS,
    // },
    redis: {
        username: process.env.SERVER_REDIS_USERNAME,
        password: process.env.SERVER_REDIS_PASSWORD,
        host: process.env.SERVER_REDIS_HOST,
        port: process.env.SERVER_REDIS_PORT,
    },
    stripe: {
        publishable_key: process.env.PROD_STRPE_PUBLISHABLE_KEY,
        secret_key: process.env.PROD_STRIPE_SECRET_KEY
    },
    brevo: {
        smtp_host: process.env.BREVO_SMTP_HOST,
        smtp_port: process.env.BREVO_SMTP_PORT,
        smtp_secure: process.env.BREVO_SMTP_SECURE,
        smtp_user: process.env.BREVO_SMTP_USER,
        smtp_pass: process.env.BREVO_SMTP_PASS,
        from_email: process.env.BREVO_FROM_EMAIL, // Your verified email
    },
};
