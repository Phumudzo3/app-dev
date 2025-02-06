export interface Enviroment {
    db_url: string;
    jwt_secret_key: string;
    jwt_refresh_secret_key: string;
    sendgrid?: {
        api_key?: string;
        email_from?: string;
    };
    brevo?: {
        smtp_host: string;
        smtp_port: string;
        smtp_secure: string;
        smtp_user: string;
        smtp_pass: string;
        from_email: string;
    };
    gmail_auth?: {
        user: string;
        pass: string;
    };
    redis?: {
        username?: string;
        password?: string;
        host: string;
        port: string;
    };
    stripe: {
        publishable_key: string;
        secret_key: string;
    };
}
export declare function getEnvironmentVariables(): Enviroment;
