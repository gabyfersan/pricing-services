import { validateInputs } from '../utils/utils';
import { doesCustomerExist } from './customer';
import { calculatePrice } from './pricing';
import { PriceCalculationRequest } from './types';

// const options = {
//   certFile: '../certification/cert.pem', // Path to your certificate file
//   keyFile: '../certification/key.pem', // Path to your private key file
//   port: 443, // Default HTTPS port
// };

// const server = Deno.L({
//   hostname: '0.0.0.0', // Listen on all available interfaces
//   port: options.port,
//   certFile: options.certFile,
//   keyFile: options.keyFile,
// });

//console.log(`HTTPS web server running on https://localhost:${options.port}/`);

// for await (const conn of server) {
//   serve(handler, { conn, httpConn: Deno.serveHttp(conn) });
// }
Deno.serve(async (req: Request) => {
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
});
