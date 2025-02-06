export declare class OrderController {
    static placeOrder(req: any, res: any, next: any): Promise<void>;
    static getUserOrders(req: any, res: any, next: any): Promise<any>;
    static stripeCheckout(req: any, res: any, next: any): Promise<any>;
}
