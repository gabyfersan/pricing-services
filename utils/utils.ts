import moment from 'moment';
import type { PriceCalculationRequest } from '../src/types';

export const isWorkingDay = (date: string, workingDay: Array<number>) => {
  const day = moment(date).day(); // Sunday = 0, Saturday = 6
  return workingDay.includes(day);
};

export function validateInputs(request: PriceCalculationRequest) {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const customerIdRegex = /^[A-Z]$/;

  const { customerId, startDate, endDate } = request;

  if (!customerId || !startDate || !endDate) {
    return false;
  }

  if (!dateRegex.test(startDate) || !dateRegex.test(endDate)) {
    return false;
  }

  if (dateRegex.test(startDate) < dateRegex.test(endDate)) {
    return false;
  }

  if (!customerIdRegex.test(customerId)) {
    return false;
  }

  return true;
}
