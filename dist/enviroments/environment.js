"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvironmentVariables = getEnvironmentVariables;
const enviroment_dev_1 = require("./enviroment.dev");
const enviroment_prod_1 = require("./enviroment.prod");
function getEnvironmentVariables() {
    if (process.env.NODE_ENV === "production") {
        return enviroment_prod_1.ProdEnviroment;
    }
    return enviroment_dev_1.DevEnviroment;
}
