import { allDaysAreWorkingDay, onlyWeekDaysAreWorkingDay } from '../utils/utils';
import { BasePrices, Customers } from './types';

export const customers: Customers = {
  X: {
    services: {
      A: { startDateForService: '2019-09-20' },
      C: {
        startDateForService: '2019-09-20',
        discounts: [{ startDateDiscount: '2019-09-22', endDateDiscount: '2019-09-24', discount: 0.2 }],
      },
    },
    freeDays: 0,
  },
  Y: {
    services: {
      B: { startDateForService: '2018-01-01', discounts: [{ discount: 0.3 }] },
      C: {
        startDateForService: '2018-01-01',
        discounts: [{ discount: 0.3 }],
      },
    },
    freeDays: 200,
  },
  W: {
    services: {
      A: { startDateForService: '2019-09-21' },
      C: {
        startDateForService: '2019-09-23',
        discounts: [
          { startDateDiscount: '2019-09-22', endDateDiscount: '2019-09-24', discount: 0.5 },
          { startDateDiscount: '2019-09-26', endDateDiscount: '2019-09-27', discount: 0.1 },
        ],
      },
    },
    freeDays: 2,
  },
};

export const basePrices: BasePrices = {
  A: { workingDay: onlyWeekDaysAreWorkingDay, price: 0.2 },
  B: { workingDay: onlyWeekDaysAreWorkingDay, price: 0.24 },
  C: {
    workingDay: allDaysAreWorkingDay,
    price: 0.4,
  },
};
