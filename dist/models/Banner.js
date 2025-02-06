"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const bannerSchema = new mongoose.Schema({
    //restaurant_id: { type: mongoose.Types.ObjectId, ref: "restaurants" },
    banner: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
    created_at: { type: Date, required: true, default: new Date() },
    updated_at: { type: Date, required: true, default: new Date() },
});
exports.default = (0, mongoose_1.model)("banners", bannerSchema);
