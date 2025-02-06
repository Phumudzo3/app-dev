export declare class UserValidators {
    static registerUserViaPhone(): import("express-validator").ValidationChain[];
    static optLogin(): import("express-validator").ValidationChain[];
    static signup(): import("express-validator").ValidationChain[];
    static verifyUserEmailToken(): import("express-validator").ValidationChain[];
    static login(): import("express-validator").ValidationChain[];
    static checkResetPasowrdEmail(): import("express-validator").ValidationChain[];
    static verifyResetPasswordToken(): import("express-validator").ValidationChain[];
    static resetpassword(): import("express-validator").ValidationChain[];
    static verifyPhoneNumber(): import("express-validator").ValidationChain[];
    static verifyUserProfile(): import("express-validator").ValidationChain[];
    static verifyCustomerProfile(): import("express-validator").ValidationChain[];
    static userProfilePic(): import("express-validator").ValidationChain[];
}
