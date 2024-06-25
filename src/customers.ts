import { Customers, BasePrices } from './types';

export const customers: Customers = {
  X: {
    services: {
        A: { startDate: '2019-09-20', price: 0.2 },
        C: { startDate: '2019-09-20', price: 0.4, discounts: [{ start: '2019-09-22', end: '2019-09-24', discount: 0.2 }] }
    },
    freeDays: 0
},
  // X: {
  //   services: {
  //     A: {
  //       startDate: '2019-09-20',
  //       price: 0.2,
  //       //  ,         discounts: [{start: '2019-09-26', end: '2019-10-01',  discount: 0.2 }] // 12 days desicount
  //       //  ,         discounts: [{start: '2019-09-23', end: '2019-09-23',  discount: 0.2 }]
  //     },
  //     C: {
  //       startDate: '2019-09-20',
  //       price: 0.4,
  //       discounts: [{ start: '2019-09-22', end: '2019-09-24', discount: 0.2 }],
  //     },
  //   },
  //   freeDays: 0,
  // },
  Y: {
    services: {
      B: { startDate: '2018-01-01', price: 0.24 },
      C: {
        startDate: '2018-01-01',
        price: 0.4,
        discounts: [{ discount: 0.3 }],
      },
    },
    freeDays: 200,
  },
};

export const basePrices: BasePrices = {
  A: { workingDay: [1, 2, 3, 4, 5], price: 0.2 },
  B: { workingDay: [1, 2, 3, 4, 5], price: 0.24 },
  C: { workingDay: [1, 2, 3, 4, 5, 6, 7], price: 0.4 },
};
