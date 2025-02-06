"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const metricSchema = new mongoose_1.default.Schema({
    orders: { type: Number },
    ratings: { type: Number },
});
const sizeSchema = new mongoose_1.default.Schema({
    size: { type: String },
    sku: { type: String },
    price: { type: Number },
    stock_unit: { type: Number },
});
const variationsSchema = new mongoose_1.default.Schema({
    type: { type: String },
    images: { type: String },
    sku: { type: String },
    price: { type: Number },
    stock_unit: { type: Number },
    size: [sizeSchema],
});
const productSchema = new mongoose_1.default.Schema({
    store_id: { type: mongoose_1.default.Types.ObjectId, ref: 'stores', required: true },
    category_id: { type: mongoose_1.default.Types.ObjectId, ref: 'categories', required: true },
    sub_category_id: { type: mongoose_1.default.Types.ObjectId, ref: 'sub_categories', required: false },
    product_name: { type: String, required: true },
    description: { type: String },
    specifications: { type: Object },
    sku: { type: String },
    images: [{ type: String }],
    price: { type: Number },
    stock_unit: { type: Number },
    metrics: metricSchema,
    variations: [variationsSchema],
    status: { type: Boolean },
    created_at: { type: Date, required: true, default: new Date() },
    updated_at: { type: Date, required: true, default: new Date() },
});
exports.default = (0, mongoose_1.model)('products', productSchema);
