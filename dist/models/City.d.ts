import * as mongoose from "mongoose";
declare const _default: mongoose.Model<{
    name: string;
    long: number;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    lat: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    long: number;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    lat: number;
}> & {
    name: string;
    long: number;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    lat: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    long: number;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    lat: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    long: number;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    lat: number;
}>> & mongoose.FlatRecord<{
    name: string;
    long: number;
    status: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    lat: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
