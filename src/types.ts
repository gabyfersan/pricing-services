import { TLSOptions } from 'bun';

export interface PriceCalculationRequest {
  customerId: string;
  startDate: string;
  endDate: string;
}

export interface Discount {
  discount: number;
  startDateDiscount?: string;
  endDateDiscount?: string;
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

export interface ServerConfig {
  port: number;
  tlsOptions: TLSOptions;
  validateInputs: (request: PriceCalculationRequest) => boolean;
  doesCustomerExist: (customerId: string) => boolean;
  calculatePrice: (customerId: string, startDate: string, endDate: string) => void;
}

export interface Request {
  url: string;
  method: string;
}
