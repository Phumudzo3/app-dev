export declare class Jwt {
    static jwtSign(payload: any, userId: any, expires_In?: string): string;
    static jwtVerify(token: string): Promise<any>;
    static jwtSignRefreshToken(payload: any, userId: any, expires_In?: string, redis_ex?: number): Promise<string>;
    static jwtVerifyRefreshToken(refreshToken: string): Promise<any>;
    private static gen_secret_key;
}
