import * as mongoose from "mongoose";
declare const _default: mongoose.Model<{
    type: string;
    email: string;
    status: string;
    verification_token: string;
    verification_token_time: NativeDate;
    phone: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    name?: string;
    password?: string;
    account_verified?: boolean;
    reset_password_token_time?: NativeDate;
    reset_password_token?: string;
    photo?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    type: string;
    email: string;
    status: string;
    verification_token: string;
    verification_token_time: NativeDate;
    phone: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    name?: string;
    password?: string;
    account_verified?: boolean;
    reset_password_token_time?: NativeDate;
    reset_password_token?: string;
    photo?: string;
}> & {
    type: string;
    email: string;
    status: string;
    verification_token: string;
    verification_token_time: NativeDate;
    phone: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    name?: string;
    password?: string;
    account_verified?: boolean;
    reset_password_token_time?: NativeDate;
    reset_password_token?: string;
    photo?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    type: string;
    email: string;
    status: string;
    verification_token: string;
    verification_token_time: NativeDate;
    phone: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    name?: string;
    password?: string;
    account_verified?: boolean;
    reset_password_token_time?: NativeDate;
    reset_password_token?: string;
    photo?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    type: string;
    email: string;
    status: string;
    verification_token: string;
    verification_token_time: NativeDate;
    phone: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    name?: string;
    password?: string;
    account_verified?: boolean;
    reset_password_token_time?: NativeDate;
    reset_password_token?: string;
    photo?: string;
}>> & mongoose.FlatRecord<{
    type: string;
    email: string;
    status: string;
    verification_token: string;
    verification_token_time: NativeDate;
    phone: string;
    created_at: NativeDate;
    updated_at: NativeDate;
    name?: string;
    password?: string;
    account_verified?: boolean;
    reset_password_token_time?: NativeDate;
    reset_password_token?: string;
    photo?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
