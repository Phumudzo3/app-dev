"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const addressSchema = new mongoose.Schema({
    user_id: { type: mongoose.Types.ObjectId, ref: "users", required: true },
    title: { type: String, required: true },
    address: { type: String, required: true },
    landmark: { type: String, required: true },
    house: { type: String, required: true },
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
    created_at: { type: Date, required: true, default: new Date() },
    updated_at: { type: Date, required: true, default: new Date() },
});
exports.default = (0, mongoose_1.model)("addresses", addressSchema);
