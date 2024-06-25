// server.js
import { serve } from 'bun';
import { calculatePrice } from './pricing';

serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === '/calculate-price' && req.method === 'GET') {
      const customerId = url.searchParams.get('customerId');
      const start = url.searchParams.get('start');
      const end = url.searchParams.get('end');
      if (!customerId || !start || !end) {
        return new Response(JSON.stringify({ error: 'Missing parameters' }), { status: 400 });
      }
      try {
        const price = calculatePrice(customerId, start, end);
        return new Response(JSON.stringify({ price }), { status: 200 });
      } catch (error) {
        let errorMessage = 'An unknown error occurred';
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        return new Response(JSON.stringify({ error: errorMessage }), { status: 400 });
      }
    }
    return new Response('Not Found', { status: 404 });
  },
  port: 3000,
});

console.log(`PricingService listening at http://localhost:3000`);
