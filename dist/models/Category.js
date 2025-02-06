"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose.Schema({
    //restaurant_id: { type:mongoose.Types.ObjectId, ref:'restaurants', required: true },
    name: { type: String, required: true },
    photo: { type: String, required: false },
    status: { type: Boolean, requred: true },
    created_at: { type: Date, required: true, default: new Date() },
    updated_at: { type: Date, required: true, default: new Date() },
});
exports.default = (0, mongoose_1.model)("categories", CategorySchema);
