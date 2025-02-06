import * as Multer from "multer";
export declare class Utils {
    MAX_TOKEN_TIME: number;
    multer: Multer.Multer;
    static generateVerificationToken(digit?: number): string;
    static encryptPassword(password: any): Promise<unknown>;
    static comparePassword(data: {
        password: string;
        encrypt_password: string;
    }): Promise<any>;
    static dotenvConfigs(): void;
}
