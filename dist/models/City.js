"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const citySchema = new mongoose.Schema({
    name: { type: String, required: true },
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
    status: { type: String, required: true },
    created_at: { type: Date, required: true, default: new Date() },
    updated_at: { type: Date, required: true, default: new Date() },
});
exports.default = (0, mongoose_1.model)("cities", citySchema);
