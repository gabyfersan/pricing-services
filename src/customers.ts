import { Customers, BasePrices } from './types';

export const customers: Customers = {
  X: {
    services: {
      //A: { startDate: '2019-09-20', price: 0.2 },
      C: {
        startDate: '2019-09-20',
        price: 0.4,
       // discounts: [{ start: '2019-09-22', end: '2019-09-24', discount: 0.2 }, { start: '2019-09-26', end: '2019-09-27', discount: 0.2 }],
      },
    },
    freeDays: 0,
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
      B: { startDate: '2018-01-01', price: 0.24, discounts: [{ discount: 0.3 }] },
      // C: {
      //   startDate: '2018-01-01',
      //   price: 0.4,
      //   discounts: [{ discount: 0.3 }],
      // },
    },
    freeDays: 200,
  },
};



// export const customers: Customers = {
//     X: {
//         freeDays: 0,
//         services: {
//             A: {
//                 price: 0.2,
//                 startDate: '2019-09-20',
//             },
//             C: {
//                 price: 0.4,
//                 startDate: '2019-09-20',
//                 discounts: [
//                     {
//                         discount: .20,
//                         start: '2019-09-22',
//                         end: '2019-09-24',
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
//                 startDate: '2018-01-01',
//                 discounts: [
//                     {
//                         discount: 0.30,
//                     },
//                 ],
//             },
//             C: {
//                 price: 0.4,
//                 startDate: '2018-01-01',
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
//                 startDate: '2019-01-01',
//             },
//             B: {
//                 price: 0.25,
//                 startDate: '2019-01-01',
//             },
//             C: {
//                 price: 0.4,
//                 startDate: '2019-01-01',
//             },
//         },
//     },
//     B: {
//         freeDays: 5,
//         services: {
//             A: {
//                 price: 0.2,
//                 startDate: '2019-06-01',
//             },
//             B: {
//                 price: 0.24,
//                 startDate: '2019-06-01',
//             },
//             C: {
//                 price: 0.35,
//                 startDate: '2019-06-01',
//                 discounts: [
//                     {
//                         discount: 0.20,
//                         start: '2019-07-01',
//                         end: '2019-07-10',
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
//                 startDate: '2018-01-01',
//                 discounts: [
//                     {
//                         discount: 0.30,
//                     },
//                 ],
//             },
//             B: {
//                 price: 0.24,
//                 startDate: '2018-01-01',
//                 discounts: [
//                     {
//                         discount: 0.30,
//                     },
//                 ],
//             },
//             C: {
//                 price: 0.4,
//                 startDate: '2018-01-01',
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
//                 startDate: '2020-01-01',
//             },
//             B: {
//                 price: 0.3,
//                 startDate: '2020-01-01',
//             },
//             C: {
//                 price: 0.5,
//                 startDate: '2020-01-01',
//             },
//         },
//     },
//     E: {
//         freeDays: 20,
//         services: {
//             A: {
//                 price: 0.25,
//                 startDate: '2021-01-01',
//                 discounts: [
//                     {
//                         discount: 0.10,
//                         start: '2021-02-01',
//                         end: '2021-02-10',
//                     },
//                 ],
//             },
//             B: {
//                 price: 0.2,
//                 startDate: '2021-01-01',
//                 discounts: [
//                     {
//                         discount: 0.15,
//                         start: '2021-03-01',
//                         end: '2021-03-10',
//                     },
//                 ],
//             },
//             C: {
//                 price: 0.45,
//                 startDate: '2021-01-01',
//             },
//         },
//     },
// };


export const basePrices: BasePrices = {
  A: { workingDay: [1, 2, 3, 4, 5], price: 0.2 },
  B: { workingDay: [1, 2, 3, 4, 5], price: 0.24 },
  C: { workingDay: [1, 2, 3, 4, 5, 6, 0], price: 0.4 },
};
