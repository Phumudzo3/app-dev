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
exports.CityController = void 0;
const City_1 = require("../models/City");
class CityController {
    static addCity(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = req.body.name;
            const lat = req.body.lat;
            const long = req.body.long;
            const status = req.body.status;
            try {
                const data = {
                    name,
                    long,
                    lat,
                    status,
                };
                const city = yield new City_1.default(data).save();
                res.send(city);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static getCities(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cities = yield City_1.default.find({ status: "active" });
                res.send(cities);
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.CityController = CityController;
