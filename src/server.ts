import { serve } from 'bun';
import { validateInputs } from '../utils/utils';
import { doesCustomerExist } from './customer';
import { calculatePrice } from './pricing';
import { PriceCalculationRequest } from './types';

const sslOptions = {
  certFile: 'certification/cert.pem', // Path to your certificate file
  keyFile: 'certification/key.pem', // Path to your private key file
  port: 443, // Default HTTPS port
};

const server = serve({
  port: sslOptions.port,
  tls: {
    cert: Bun.file(sslOptions.certFile),
    key: Bun.file(sslOptions.keyFile),
  },
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === '/price' && req.method === 'GET') {
      const customerId = url.searchParams.get('customerId') ?? '';
      const startDate = url.searchParams.get('startDate') ?? '';
      const endDate = url.searchParams.get('endDate') ?? '';

      const request: PriceCalculationRequest = {
        customerId,
        startDate,
        endDate,
      };

      if (!validateInputs(request)) {
        return new Response(JSON.stringify({ error: 'Invalid input' }), {
          status: 400,
        });
      }

      if (!doesCustomerExist(customerId)) {
        return new Response(JSON.stringify({ error: 'Customer Not Found' }), {
          status: 401,
        });
      }

      try {
        const price = await calculatePrice(request.customerId, request.startDate, request.endDate);
        return new Response(JSON.stringify({ price }), { status: 200 });
      } catch (error) {
        return new Response(
          JSON.stringify({
            error: error instanceof Error ? error.message : 'An unknown error occurred',
          }),
          { status: 500 },
        );
      }
    }
    return new Response('Not Found ' + url, { status: 404 });
  },
});
console.log(`Listening on https://localhost:${server.port} ...`);
console.log(`Please use `);
console.log(`
https://localhost:443/price?customerId=X&startDate=2019-09-20&endDate=2019-10-01
https://localhost:443/price?customerId=Y&startDate=2018-01-01&endDate=2019-10-01`);
