import moment from 'moment';
import { calculateDiscountedPrice, calculateTotalPrice } from '../src/pricing';
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

describe('calculateDiscountedPrice', () => {
  it('should calculate the Discounted Price to 7 when no date on discount date is present', () => {
    const price = calculateDiscountedPrice(10, moment('2024-01-01'), { discount: 0.3 });
    expect(price).toBe(7);
  });

  it('should calculate the Discounted Price to 7 when dates on discount date is present and inside the dates', () => {
    const price = calculateDiscountedPrice(10, moment('2024-01-01'), {
      startDateDiscount: '2024-01-01',
      endDateDiscount: '2024-01-01',
      discount: 0.3,
    });
    expect(price).toBe(7);
  });

  it('should return 10 when current date is outside the discount date', () => {
    const price = calculateDiscountedPrice(10, moment('2024-01-02'), {
      startDateDiscount: '2024-01-01',
      endDateDiscount: '2024-01-01',
      discount: 0.3,
    });
    expect(price).toBe(10);
  });
});

describe('PricingService', () => {
  it('should calculate the correct price for Customer X to 6.16', () => {
    const price = calculateTotalPrice(testCase1, 0, '2019-09-20', '2019-10-01');
    expect(price).toBe(6.16);
  });

  it('should calculate the correct price for Customer Y to 166.096', () => {
    const price = calculateTotalPrice(testCase2, 200, '2018-01-01', '2019-10-01');
    expect(price).toBe(166.096);
  });

  it('should calculate the correct price to 3,72', () => {
    const price = calculateTotalPrice(services1, 2, '2019-09-20', '2019-10-01');
    expect(price).toBe(3.72);
  });
});
