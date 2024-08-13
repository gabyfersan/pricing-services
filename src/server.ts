import { serve, TLSOptions } from 'bun';
import { validateInputs } from '../utils/utils';
import { doesCustomerExist } from './customer';
import { calculatePrice } from './pricing';
import { PriceCalculationRequest, ServerConfig } from './types';
import { sanitizeObject } from '../utils/sanitize';

const tlsOptions: TLSOptions = {
  certFile: 'certification/cert.pem', // Path to your certificate file
  keyFile: 'certification/key.pem', // Path to your private key file
};

const createServer = ({ port, tlsOptions, validateInputs, doesCustomerExist, calculatePrice }: ServerConfig) => {
  return serve({
    port,
    tls: tlsOptions,
    async fetch(req) {
      const url = new URL(req.url);

      if (url.pathname === '/price' && req.method === 'GET') {
        const customerId = url.searchParams.get('customerId') ?? '';
        const startDate = url.searchParams.get('startDate') ?? '';
        const endDate = url.searchParams.get('endDate') ?? '';

        const sanitizedInputs = sanitizeObject({ customerId, startDate, endDate });

        const request: PriceCalculationRequest = {
          customerId: sanitizedInputs.customerId,
          startDate: sanitizedInputs.startDate,
          endDate: sanitizedInputs.endDate,
        };

        if (!validateInputs(request)) {
          return new Response(JSON.stringify({ error: 'Invalid input' }), {
            status: 400,
          });
        }

        if (!doesCustomerExist(request.customerId)) {
          return new Response(JSON.stringify({ error: 'Customer Not Found' }), { status: 401 });
        }

        try {
          const price = await calculatePrice(request.customerId, request.startDate, request.endDate);
          return new Response(JSON.stringify({ price }), {
            status: 200,
          });
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
};

const server = createServer({
  port: 443,
  tlsOptions,
  validateInputs,
  doesCustomerExist,
  calculatePrice,
});

console.log(`Listening on https://localhost:${server.port} ...`);
