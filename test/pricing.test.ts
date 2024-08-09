// import { describe, it, expect } from 'bun:test';
// import { calculatePrice } from '../src/pricing';

// describe('PricingService', () => {
// //   it('should calculate the correct price for test case 1', () => {
// //     const price = calculatePrice('X', '2019-09-20', '2019-10-01');
// //     expect(price).toBeCloseTo(6.16, 0.01); // Adjust based on your calculation logic
// //   });

// //   it('should calculate the correct price for test case 2', () => {
// //     const price = calculatePrice('Y', '2018-01-01', '2019-10-01');
// //     expect(price).toBeCloseTo(222.096, 0.01); // Adjust based on your calculation logic
// //   });

// //   it('should calculate the correct price for test case 3', () => {
// //     const price = calculatePrice('X', '2020-01-01', '2020-01-10');
// //     expect(price).toBeCloseTo(5.22, 0.01);
// //   });

//   it('should calculate the correct price for test case 4', () => {
//     const price = calculatePrice('Y', '2019-01-01', '2019-12-31');
//     expect(price).toBeCloseTo(147.48, 0.01);
//   });
// });

// tests/pricing.test.ts
//import { describe, it, expect } from "bun:test";
import { calculateTotalPrice } from '../src/pricing';

const testCase1 = {
  A: { startDateForService: '2019-09-20' },
  C: {
    startDateForService: '2019-09-20',
    discounts: [{ startDateDiscount: '2019-09-22', endDateDiscount: '2019-09-24', discount: 0.2 }],
  },
};

const testCase2 = {
  B: { startDateForService: '2018-01-01', price: 0.24, discounts: [{ discount: 0.3 }] },
  C: {
    startDateForService: '2018-01-01',
    price: 0.4,
    discounts: [{ discount: 0.3 }],
  },
};
const services1 = {
  A: { startDateForService: '2019-09-21' },
  C: {
    startDateForService: '2019-09-23',
    discounts: [
      { startDateDiscount: '2019-09-22', endDateDiscount: '2019-09-24', discount: 0.5 },
      { startDateDiscount: '2019-09-26', endDateDiscount: '2019-09-27', discount: 0.1 },
    ],
  },
};

describe('PricingService', () => {
  it('should calculate the correct price', () => {
    const price = calculateTotalPrice(services1, 2, '2019-09-20', '2019-10-01');
    expect(price).toBe(3.72);
  });

  it('should calculate the correct price for Customer X', () => {
    const price = calculateTotalPrice(testCase1, 0, '2019-09-20', '2019-10-01');
    expect(price).toBe(6.16);
  });

  it('should calculate the correct price for Customer Y', () => {
    const price = calculateTotalPrice(testCase2, 200, '2018-01-01', '2019-10-01');
    expect(price).toBe(166.096);
  });
  // it('should calculate the correct price for Customer Y', () => {
  //     const price = calculatePrice('Y', '2018-01-01', '2019-10-01');
  //     expect(price).toBeCloseTo(222.10, 0.01);
  // });

  // it('should calculate the correct price for Customer A', () => {
  //     const price = calculatePrice('A', '2019-01-01', '2019-12-31');
  //     expect(price).toBeCloseTo(246.00, 0.01);
  // });

  // it('should calculate the correct price for Customer B', () => {
  //     const price = calculatePrice('B', '2019-06-01', '2019-12-31');
  //     expect(price).toBeCloseTo(139.59, 0.01);
  // });

  // it('should calculate the correct price for Customer C', () => {
  //     const price = calculatePrice('C', '2018-01-01', '2019-12-31');
  //     expect(price).toBeCloseTo(337.18, 0.01);
  // });

  // it('should calculate the correct price for Customer D', () => {
  //     const price = calculatePrice('D', '2020-01-01', '2020-12-31');
  //     expect(price).toBeCloseTo(287.80, 0.01);
  // });

  // it('should calculate the correct price for Customer E', () => {
  //     const price = calculatePrice('E', '2021-01-01', '2021-12-31');
  //     expect(price).toBeCloseTo(272.15, 0.01);
  // });
});
