import * as mongoose from "mongoose";
declare const _default: mongoose.Model<{
    total: number;
    address: any;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    products: any[];
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    grandTotal: number;
    deliveryCharge: number;
    payment_status: boolean;
    payment_mode: string;
    tracking?: {
        status?: string;
        company?: string;
        tracking_no?: string;
        estimated_delivery?: string;
    };
    instruction?: any;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    total: number;
    address: any;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    products: any[];
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    grandTotal: number;
    deliveryCharge: number;
    payment_status: boolean;
    payment_mode: string;
    tracking?: {
        status?: string;
        company?: string;
        tracking_no?: string;
        estimated_delivery?: string;
    };
    instruction?: any;
}> & {
    total: number;
    address: any;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    products: any[];
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    grandTotal: number;
    deliveryCharge: number;
    payment_status: boolean;
    payment_mode: string;
    tracking?: {
        status?: string;
        company?: string;
        tracking_no?: string;
        estimated_delivery?: string;
    };
    instruction?: any;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    total: number;
    address: any;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    products: any[];
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    grandTotal: number;
    deliveryCharge: number;
    payment_status: boolean;
    payment_mode: string;
    tracking?: {
        status?: string;
        company?: string;
        tracking_no?: string;
        estimated_delivery?: string;
    };
    instruction?: any;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    total: number;
    address: any;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    products: any[];
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    grandTotal: number;
    deliveryCharge: number;
    payment_status: boolean;
    payment_mode: string;
    tracking?: {
        status?: string;
        company?: string;
        tracking_no?: string;
        estimated_delivery?: string;
    };
    instruction?: any;
}>> & mongoose.FlatRecord<{
    total: number;
    address: any;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    products: any[];
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    grandTotal: number;
    deliveryCharge: number;
    payment_status: boolean;
    payment_mode: string;
    tracking?: {
        status?: string;
        company?: string;
        tracking_no?: string;
        estimated_delivery?: string;
    };
    instruction?: any;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
