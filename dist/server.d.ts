import * as express from "express";
export declare class Server {
    app: express.Application;
    constructor();
    setConfigs(): void;
    dotenvConfigs(): void;
    allowCors(): void;
    connectMongoDB(): void;
    connectRedis(): Promise<void>;
    setRoutes(): void;
    error404Handler(): void;
    handleErrors(): void;
    configureBodyParser(): void;
}
