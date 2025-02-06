"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const storeSchema = new mongoose.Schema({
    user_id: { type: mongoose.Types.ObjectId, ref: "users", required: true },
    city_id: { type: mongoose.Types.ObjectId, ref: "cities", required: true },
    name: { type: String, required: true },
    //short_name:{type:String,required:true},
    description: { type: String },
    cover: { type: String, required: false },
    location: { type: Object, required: true },
    openTime: { type: String, required: false },
    closeTime: { type: String, required: false },
    address: { type: String, required: true },
    //isClose: { type: Boolean, required: true, default: false },
    status: { type: String, required: true },
    // rating: { type: Number, required: true, default: 0 },
    // totalrating: { type: Number, required: true, default: 0 },
    created_at: { type: Date, required: true, default: new Date() },
    updated_at: { type: Date, required: true, default: new Date() },
});
exports.default = (0, mongoose_1.model)("stores", storeSchema);
