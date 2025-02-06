import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    created_at: NativeDate;
    updated_at: NativeDate;
    images: string[];
    store_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    category_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    product_name: string;
    variations: mongoose.Types.DocumentArray<{
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }> & {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
        images?: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }> & {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
        images?: string;
    }> & {
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }> & {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
        images?: string;
    }>;
    description?: string;
    status?: boolean;
    sku?: string;
    price?: number;
    stock_unit?: number;
    metrics?: {
        orders?: number;
        ratings?: number;
    };
    sub_category_id?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    specifications?: any;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    created_at: NativeDate;
    updated_at: NativeDate;
    images: string[];
    store_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    category_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    product_name: string;
    variations: mongoose.Types.DocumentArray<{
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }> & {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
        images?: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }> & {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
        images?: string;
    }> & {
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }> & {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
        images?: string;
    }>;
    description?: string;
    status?: boolean;
    sku?: string;
    price?: number;
    stock_unit?: number;
    metrics?: {
        orders?: number;
        ratings?: number;
    };
    sub_category_id?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    specifications?: any;
}> & {
    created_at: NativeDate;
    updated_at: NativeDate;
    images: string[];
    store_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    category_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    product_name: string;
    variations: mongoose.Types.DocumentArray<{
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }> & {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
        images?: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }> & {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
        images?: string;
    }> & {
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }> & {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
        images?: string;
    }>;
    description?: string;
    status?: boolean;
    sku?: string;
    price?: number;
    stock_unit?: number;
    metrics?: {
        orders?: number;
        ratings?: number;
    };
    sub_category_id?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    specifications?: any;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    created_at: NativeDate;
    updated_at: NativeDate;
    images: string[];
    store_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    category_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    product_name: string;
    variations: mongoose.Types.DocumentArray<{
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }> & {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
        images?: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }> & {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
        images?: string;
    }> & {
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }> & {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
        images?: string;
    }>;
    description?: string;
    status?: boolean;
    sku?: string;
    price?: number;
    stock_unit?: number;
    metrics?: {
        orders?: number;
        ratings?: number;
    };
    sub_category_id?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    specifications?: any;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    created_at: NativeDate;
    updated_at: NativeDate;
    images: string[];
    store_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    category_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    product_name: string;
    variations: mongoose.Types.DocumentArray<{
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }> & {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
        images?: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }> & {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
        images?: string;
    }> & {
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }> & {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
        images?: string;
    }>;
    description?: string;
    status?: boolean;
    sku?: string;
    price?: number;
    stock_unit?: number;
    metrics?: {
        orders?: number;
        ratings?: number;
    };
    sub_category_id?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    specifications?: any;
}>> & mongoose.FlatRecord<{
    created_at: NativeDate;
    updated_at: NativeDate;
    images: string[];
    store_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    category_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    product_name: string;
    variations: mongoose.Types.DocumentArray<{
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }> & {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
        images?: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }> & {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
        images?: string;
    }> & {
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }> & {
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
        images?: string;
    }>;
    description?: string;
    status?: boolean;
    sku?: string;
    price?: number;
    stock_unit?: number;
    metrics?: {
        orders?: number;
        ratings?: number;
    };
    sub_category_id?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    specifications?: any;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
