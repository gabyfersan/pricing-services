import { validateInputs } from '../utils/utils';
import { doesCustomerExist } from './customer';
import { calculatePrice } from './pricing';
import { PriceCalculationRequest } from './types';

Deno.serve(async (req: Request) => {
  const url = new URL(req.url);

  if (url.pathname === '/calculate-price' && req.method === 'GET') {
    const customerId = url.searchParams.get('customerId') ?? '';
    const startDate = url.searchParams.get('startDate') ?? '';
    const endDate = url.searchParams.get('endDate') ?? '';

    const request: PriceCalculationRequest = {
      customerId,
      startDate,
      endDate,
    };
    console.log('customerId', customerId, startDate, endDate);
    if (!validateInputs(request)) {
      return new Response(JSON.stringify({ error: 'Invalid input' }), {
        status: 400,
      });
    }

    if (!doesCustomerExist(customerId)) {
      return new Response(JSON.stringify({ error: 'Customer Not Found' }), {
        status: 404,
      });
    }

    try {
      const price = await calculatePrice(request.customerId, request.startDate, request.endDate);
      return new Response(JSON.stringify({ price }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }
  }
  return new Response('Not Found fd' + url, { status: 404 });
});
