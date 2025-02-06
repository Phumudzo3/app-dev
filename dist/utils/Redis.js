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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redis = void 0;
const redis_1 = require("redis");
const environment_1 = require("../enviroments/environment");

const client = (0, redis_1.createClient)({
    // url:'redis://' + getEnvironmentVariables().redis.host +':' + getEnvironmentVariables().redis.port,
    url: 'redis://default:X9lOtEQ5XMQVmeWYTZToMmTxFEQDZA9x@redis-17563.c341.af-south-1-1.ec2.redns.redis-cloud.com:17563',
    username: (_b = (_a = (0, environment_1.getEnvironmentVariables)()) === null || _a === void 0 ? void 0 : _a.redis) === null || _b === void 0 ? void 0 : _b.username,
    password: (_d = (_c = (0, environment_1.getEnvironmentVariables)()) === null || _c === void 0 ? void 0 : _c.redis) === null || _d === void 0 ? void 0 : _d.password,
    socket: {
        host: (_g = (_f = (_e = (0, environment_1.getEnvironmentVariables)()) === null || _e === void 0 ? void 0 : _e.redis) === null || _f === void 0 ? void 0 : _f.host) !== null && _g !== void 0 ? _g : 'default-host',
        port: parseInt((_k = (_j = (_h = (0, environment_1.getEnvironmentVariables)()) === null || _h === void 0 ? void 0 : _h.redis) === null || _j === void 0 ? void 0 : _j.port) !== null && _k !== void 0 ? _k : '6379', 10),
    },
});
class Redis {
    static conncectToRedis() {
        client.on("error", (err) => console.log("Redis Client Error", err));
        client
            .connect()
            .then(() => {
            console.log("connected to redis");
        })
            .catch((e) => {
            throw e;
        });
    }
    static async setValue(key, value, expires_at) {
        if (!client.isOpen) {
            await Redis.conncectToRedis();  // Ensure connection is established
        }
        try {
            let options = {};
            if (expires_at) {
                options = { EX: expires_at };
            }
            await client.set(key, value, options);  // Await the set operation
        } catch (e) {
            console.log(e);
            throw "server not connected, please try again";
        }
    }
    
    static getValue(key) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const value = yield client.get(key);
                return value;
            }
            catch (e) {
                console.log(e);
                throw "Your session has expired,please login again!";
            }
        });
    }
    static async deleteKey(key) {
        try {
            await client.del(key);  // Only call once
        } catch (e) {
            console.log(e);
            throw "server not connected, please try again";
        }
    }
    
}
exports.Redis = Redis;
