// src/types.ts
export interface Discount {
  start?: string;
  end?: string;
  discount: number;
}

export interface Service {
  startDate: string;
  price: number;
  discounts?: Discount[];
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
