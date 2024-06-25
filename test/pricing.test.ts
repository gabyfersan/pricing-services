import { describe, it, expect } from "bun:test";
import { calculatePrice } from '../src/pricing';

describe('PricingService', () => {
    it('should calculate the correct price for test case 1', () => {
        const price = calculatePrice('X', '2019-09-20', '2019-10-01');
        expect(price).toBeCloseTo(2.92, 0.01); // Adjust based on your calculation logic
    });

    it('should calculate the correct price for test case 2', () => {
        const price = calculatePrice('Y', '2018-01-01', '2019-10-01');
        expect(price).toBeCloseTo(94.08, 0.01); // Adjust based on your calculation logic
    });
});
