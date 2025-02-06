export declare class Redis {
    static conncectToRedis(): void;
    static setValue(key: any, value: any, expires_at?: any): Promise<void>;
    static getValue(key: any): Promise<string>;
    static deleteKey(key: string): Promise<void>;
}
