export interface PriceCalculationRequest {
  customerId: string;
  startDate: string;
  endDate: string;
}

export interface Discount {
  startDateDiscount?: string;
  endDateDiscount?: string
  discount: number;
}

export interface Service {
  startDateForService: string;
  price?: number;
  discounts?: Discount[];
  discount?: number;
}

export interface Customer {
  services: {
    [key: string]: Service;
  };
  freeDays: number;
}

export interface Customers {
  [key: string]: Customer;
}

export interface BasePrices {
  [key: string]: { workingDay: number[]; price: number };
}
