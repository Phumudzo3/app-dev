import stripe from "stripe";
export declare class StripeService {
    private static _stripe;
    static checkout(orderData: any): Promise<stripe.Response<stripe.Checkout.Session>>;
    static createCustomer(name: string, email: string): Promise<stripe.Customer>;
}
