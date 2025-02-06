import * as mongoose from "mongoose";
declare const _default: mongoose.Model<{
    name: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    status?: boolean;
    photo?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    status?: boolean;
    photo?: string;
}> & {
    name: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    status?: boolean;
    photo?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    status?: boolean;
    photo?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    status?: boolean;
    photo?: string;
}>> & mongoose.FlatRecord<{
    name: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    status?: boolean;
    photo?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
