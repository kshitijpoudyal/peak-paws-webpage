import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Stripe from 'stripe';

// Initialize Stripe (use test key for development)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_your_test_key_here');

// Plugin to handle API routes during development
function apiPlugin() {
  return {
    name: 'api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/create-checkout-session' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', async () => {
            try {
              const { items } = JSON.parse(body);
              
              if (!items || items.length === 0) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'No items provided' }));
                return;
              }

              const lineItems = items.map((item) => ({
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: item.name,
                    images: item.image_url 
                      ? [`http://localhost:8080${item.image_url}`]
                      : [],
                  },
                  unit_amount: Math.round(item.price * 100),
                },
                quantity: item.quantity,
              }));

              const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: lineItems,
                mode: 'payment',
                success_url: `http://localhost:8080/OrderSuccess?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `http://localhost:8080/Products`,
              });

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ url: session.url }));
            } catch (error) {
              console.error('Stripe error:', error);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: error.message }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

// Vite config for local development and Vercel deployment
export default defineConfig({
  plugins: [react(), apiPlugin()],
  resolve: {
    alias: {
      '@/': '/src/',
    },
  },
  server: {
    port: 8080,
    strictPort: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});