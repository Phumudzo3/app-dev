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
exports.Server = void 0;

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const environment_1 = require("./enviroments/environment");
const UserRouter_1 = require("./router/UserRouter");
const BannerRouter_1 = require("./router/BannerRouter");
const CityRouter_1 = require("./router/CityRouter");
const CategoryRouter_1 = require("./router/CategoryRouter");
const AddressRouter_1 = require("./router/AddressRouter");
const OrderRouter_1 = require("./router/OrderRouter");
const Utils_1 = require("./utils/Utils");
const Redis_1 = require("./utils/Redis");
const SubCategoryRouter_1 = require("./router/SubCategoryRouter");
const StoreRouter_1 = require("./router/StoreRouter");
const ProductRouter_1 = require("./router/ProductRouter");
const CartRouter_1 = require("./router/CartRouter");

class Server {
    constructor() {
        console.log("Initializing server...");
        this.app = express();
        this.setConfigs();
        this.setRoutes();
        this.setWelcomeRoute();
        this.error404Handler();
        this.handleErrors();
        this.startServer();
    }

    setConfigs() {
        console.log("Configuring server...");
        this.dotenvConfigs();
        this.connectMongoDB();
        this.connectRedis();
        this.allowCors();
        this.configureBodyParser();
    }

    dotenvConfigs() {
        Utils_1.Utils.dotenvConfigs();
    }

    allowCors() {
        this.app.use(cors());
    }

    connectMongoDB() {
        mongoose.connect((0, environment_1.getEnvironmentVariables)().db_url)
            .then(() => console.log("Connected to MongoDB."))
            .catch(error => console.error("MongoDB connection error:", error.message));
    }

    connectRedis() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Redis_1.Redis.connectToRedis();
                console.log("Connected to Redis.");
            } catch (error) {
                console.error("Error connecting to Redis:", error.message);
            }
        });
    }

    setRoutes() {
        this.app.use("/src/uploads", express.static("src/uploads"));
        this.app.use("/api/user", UserRouter_1.default);
        this.app.use("/api/city", CityRouter_1.default);
        this.app.use("/api/banner", BannerRouter_1.default);
        this.app.use("/api/store", StoreRouter_1.default);
        this.app.use("/api/category", CategoryRouter_1.default);
        this.app.use("/api/sub_category", SubCategoryRouter_1.default);
        this.app.use("/api/cart", CartRouter_1.default);
        this.app.use("/api/product", ProductRouter_1.default);
        this.app.use("/api/address", AddressRouter_1.default);
        this.app.use("/api/order", OrderRouter_1.default);
    }

    setWelcomeRoute() {
        this.app.get("/", (req, res) => {
            res.send("Welcome to the API!");
        });
    }

    error404Handler() {
        this.app.use((req, res) => {
            res.status(404).json({
                message: "Resource not found",
                status_code: 404,
            });
        });
    }

    handleErrors() {
        this.app.use((error, req, res, next) => {
            const errorStatus = error.status || 500;
            res.status(errorStatus).json({
                message: error.message || "Something went wrong, please try again",
                status_code: errorStatus,
            });
        });
    }

    configureBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }

    startServer() {
        const PORT = process.env.PORT || 3000;
        this.app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}...`);
        });
    }
}

// Instantiate the Server to start it
new Server();
