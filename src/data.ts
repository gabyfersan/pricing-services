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
  // X: {
  //   services: {
  //     A: {
  //       startDateForService: '2019-09-20',
  //       price: 0.2,
  //       //  ,         discounts: [{startDateDiscount: '2019-09-26', endDateDiscount: '2019-10-01',  discount: 0.2 }] // 12 days desicount
  //       //  ,         discounts: [{startDateDiscount: '2019-09-23', endDateDiscount: '2019-09-23',  discount: 0.2 }]
  //     },
  //     C: {
  //       startDateForService: '2019-09-20',
  //       price: 0.4,
  //       discounts: [{ startDateDiscount: '2019-09-22', endDateDiscount: '2019-09-24', discount: 0.2 }],
  //     },
  //   },
  //   freeDays: 0,
  // },
};

// export const customers: Customers = {
//     X: {
//         freeDays: 0,
//         services: {
//             A: {
//                 price: 0.2,
//                 startDateForService: '2019-09-20',
//             },
//             C: {
//                 price: 0.4,
//                 startDateForService: '2019-09-20',
//                 discounts: [
//                     {
//                         discount: .20,
//                         startDateDiscount: '2019-09-22',
//                         endDateDiscount: '2019-09-24',
//                     },
//                 ],
//             },
//         },
//     },
//     Y: {
//         freeDays: 200,
//         services: {
//             B: {
//                 price: 0.24,
//                 startDateForService: '2018-01-01',
//                 discounts: [
//                     {
//                         discount: 0.30,
//                     },
//                 ],
//             },
//             C: {
//                 price: 0.4,
//                 startDateForService: '2018-01-01',
//                 discounts: [
//                     {
//                         discount: 0.30,
//                     },
//                 ],
//             },
//         },
//     },
//     A: {
//         freeDays: 10,
//         services: {
//             A: {
//                 price: 0.15,
//                 startDateForService: '2019-01-01',
//             },
//             B: {
//                 price: 0.25,
//                 startDateForService: '2019-01-01',
//             },
//             C: {
//                 price: 0.4,
//                 startDateForService: '2019-01-01',
//             },
//         },
//     },
//     B: {
//         freeDays: 5,
//         services: {
//             A: {
//                 price: 0.2,
//                 startDateForService: '2019-06-01',
//             },
//             B: {
//                 price: 0.24,
//                 startDateForService: '2019-06-01',
//             },
//             C: {
//                 price: 0.35,
//                 startDateForService: '2019-06-01',
//                 discounts: [
//                     {
//                         discount: 0.20,
//                         startDateDiscount: '2019-07-01',
//                         endDateDiscount: '2019-07-10',
//                     },
//                 ],
//             },
//         },
//     },
//     C: {
//         freeDays: 100,
//         services: {
//             A: {
//                 price: 0.2,
//                 startDateForService: '2018-01-01',
//                 discounts: [
//                     {
//                         discount: 0.30,
//                     },
//                 ],
//             },
//             B: {
//                 price: 0.24,
//                 startDateForService: '2018-01-01',
//                 discounts: [
//                     {
//                         discount: 0.30,
//                     },
//                 ],
//             },
//             C: {
//                 price: 0.4,
//                 startDateForService: '2018-01-01',
//                 discounts: [
//                     {
//                         discount: 0.30,
//                     },
//                 ],
//             },
//         },
//     },
//     D: {
//         freeDays: 0,
//         services: {
//             A: {
//                 price: 0.1,
//                 startDateForService: '2020-01-01',
//             },
//             B: {
//                 price: 0.3,
//                 startDateForService: '2020-01-01',
//             },
//             C: {
//                 price: 0.5,
//                 startDateForService: '2020-01-01',
//             },
//         },
//     },
//     E: {
//         freeDays: 20,
//         services: {
//             A: {
//                 price: 0.25,
//                 startDateForService: '2021-01-01',
//                 discounts: [
//                     {
//                         discount: 0.10,
//                         startDateDiscount: '2021-02-01',
//                         endDateDiscount: '2021-02-10',
//                     },
//                 ],
//             },
//             B: {
//                 price: 0.2,
//                 startDateForService: '2021-01-01',
//                 discounts: [
//                     {
//                         discount: 0.15,
//                         startDateDiscount: '2021-03-01',
//                         endDateDiscount: '2021-03-10',
//                     },
//                 ],
//             },
//             C: {
//                 price: 0.45,
//                 startDateForService: '2021-01-01',
//             },
//         },
//     },
// };

enum Week {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 0,
}
export const basePrices: BasePrices = {
  A: { workingDay: [Week.Monday, Week.Tuesday, Week.Wednesday, Week.Thursday, Week.Friday], price: 0.2 },
  B: { workingDay: [Week.Monday, Week.Tuesday, Week.Wednesday, Week.Thursday, Week.Friday], price: 0.24 },
  C: {
    workingDay: [Week.Monday, Week.Tuesday, Week.Wednesday, Week.Thursday, Week.Friday, Week.Saturday, Week.Sunday],
    price: 0.4,
  },
};
