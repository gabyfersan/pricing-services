import type { PriceCalculationRequest } from '../src/types';
import { allDaysAreWorkingDay, isWorkingDay, onlyWeekDaysAreWorkingDay, validateInputs } from '../utils/utils';

describe('validateInputs', () => {
  it('should return false for customerId with length 1 and lowercase', () => {
    const request: PriceCalculationRequest = {
      customerId: 'a',
      startDate: '2023-01-01',
      endDate: '2023-01-31',
    };

    expect(validateInputs(request)).toBe(false);
  });

  it('should return true for customerId with length 1 and uppercase', () => {
    const request: PriceCalculationRequest = {
      customerId: 'A',
      startDate: '2023-01-01',
      endDate: '2023-01-31',
    };

    expect(validateInputs(request)).toBe(true);
  });

  it('should return false for empty customerId', () => {
    const request: PriceCalculationRequest = {
      customerId: '',
      startDate: '2023-01-01',
      endDate: '2023-01-31',
    };

    expect(validateInputs(request)).toBe(false);
  });

  it('should return false for invalid date format', () => {
    const request: PriceCalculationRequest = {
      customerId: 'X',
      startDate: '01-01-2023',
      endDate: '31-01-2023',
    };

    expect(validateInputs(request)).toBe(false);
  });

  it('should return false for empty date', () => {
    const request: PriceCalculationRequest = {
      customerId: 'a',
      startDate: '',
      endDate: '2023-01-31',
    };

    expect(validateInputs(request)).toBe(false);
  });

  it('should return false when start date is after end date', () => {
    const request: PriceCalculationRequest = {
      customerId: '',
      startDate: '2023-01-31',
      endDate: '2023-01-01',
    };

    expect(validateInputs(request)).toBe(false);
  });

  it('should return false when date is invalid 2023-01-32', () => {
    const request: PriceCalculationRequest = {
      customerId: 'X',
      startDate: '2023-01-01',
      endDate: '2023-01-32',
    };

    expect(validateInputs(request)).toBe(false);
  });
});

describe('isWorkingDay function', () => {
  it('should return true for Monday', () => {
    const monday = '2023-07-10'; // A Monday
    expect(isWorkingDay(monday, onlyWeekDaysAreWorkingDay)).toBe(true);
  });

  it('should return true for Friday', () => {
    const friday = '2023-07-14'; // A Friday
    expect(isWorkingDay(friday, onlyWeekDaysAreWorkingDay)).toBe(true);
  });

  it('should return false for Sunday', () => {
    const sunday = '2023-07-09'; // A Sunday
    expect(isWorkingDay(sunday, onlyWeekDaysAreWorkingDay)).toBe(false);
  });

  it('should return false for Saturday', () => {
    const saturday = '2023-07-15'; // A Saturday
    expect(isWorkingDay(saturday, onlyWeekDaysAreWorkingDay)).toBe(false);
  });
  it('should return false for Sunday', () => {
    const sunday = '2023-07-09'; // A Sunday
    expect(isWorkingDay(sunday, allDaysAreWorkingDay)).toBe(true);
  });

  it('should return false for Saturday', () => {
    const saturday = '2023-07-15'; // A Saturday
    expect(isWorkingDay(saturday, allDaysAreWorkingDay)).toBe(true);
  });
});
