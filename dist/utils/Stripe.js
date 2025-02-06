require('dotenv').config(); // Load environment variables at the start
const Stripe = require('stripe');
const { getEnvironmentVariables } = require("../enviroments/environment");

// Check if environment variable is loaded
const stripeSecretKey = getEnvironmentVariables()?.stripe?.secret_key || process.env.DEV_STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
    console.error("⚠️ Stripe secret key is missing! Check your environment variables.");
    process.exit(1); // Exit if no API key is found
}

// Initialize Stripe instance
const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2024-12-18",
});

class StripeService {
    static async checkout(orderData) {
        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                line_items: orderData.products.map((product) => ({
                    price_data: {
                        currency: "usd",
                        product_data: { name: product.product_name },
                        unit_amount: Math.round(product.price * 100), // Convert to cents
                    },
                    quantity: product.quantity,
                })),
                mode: "payment",
                success_url: "http://localhost:4200/success",
                cancel_url: "http://localhost:4200/cancel",
            });

            return session;
        } catch (error) {
            console.error("❌ Error creating Stripe session:", error.message);
            throw error;
        }
    }
}

module.exports = StripeService; 
