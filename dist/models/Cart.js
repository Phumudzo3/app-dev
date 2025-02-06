"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const cartSchema = new mongoose.Schema({
    user_id: { type: mongoose.Types.ObjectId, ref: "users", required: true },
    products: { type: Array, required: true },
    //address: { type: String, required: true },
    instruction: { type: String },
    status: { type: String, required: true },
    total: { type: Number, required: true },
    // grandTotal: { type: Number, required: true },
    // deliveryCharge: { type: Number, required: true },
    created_at: { type: Date, required: true, default: new Date() },
    updated_at: { type: Date, required: true, default: new Date() },
});
exports.default = (0, mongoose_1.model)("carts", cartSchema);
