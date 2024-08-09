import moment from 'moment';
import { isWorkingDay } from '../utils/utils';
import { basePrices, customers } from './data';
import { Customer, Discount, Service } from './types';

const calculateDiscountedPrice = (price: number, currentDate: moment.Moment, discount: Discount) => {
  let discountPrice = price;
  const discountStart = moment(discount.startDateDiscount);
  const discountEnd = moment(discount.endDateDiscount);
  if (discount.startDateDiscount === undefined || (currentDate >= discountStart && currentDate <= discountEnd)) {
    discountPrice = (price * 1000 * (1 - discount.discount)) / 1000;
  }
  return discountPrice;
};

const calculatePriceDay = (
  currentDate: moment.Moment,
  serviceId: string,
  freeDays: number,
  service: Service,
): [number, number] => {
  let price = service.price || basePrices[serviceId].price;

  if (currentDate < moment(service.startDateForService)) {
    return [0, freeDays];
  }

  const isServiceWorkingDay = isWorkingDay(currentDate.format('YYYY-MM-DD'), basePrices[serviceId].workingDay);
  if (!isServiceWorkingDay) {
    console.log('Weekend ', serviceId, 0);
    return [0, freeDays];
  }
  if (freeDays > 0) {
    console.log('freeDays', serviceId, 0, '---', freeDays);
    return [0, freeDays - 1];
  }

  if (service.discounts) {
    service.discounts.forEach((discount: Discount) => {
      price = calculateDiscountedPrice(price, currentDate, discount);
    });
  }

  if (price !== (service.price || basePrices[serviceId].price)) {
    console.log('discount', serviceId, price);
  } else {
    console.log('Normal  ', serviceId, price);
  }

  return [price, freeDays];
};

export const calculatePrice = (customerId: string, startDate: string, endDate: string) => {
  const customer: Customer = customers[customerId];

  return calculateTotalPrice(customer.services, customer.freeDays, startDate, endDate);
};

export const calculateTotalPrice = (
  services: Customer['services'],
  freeDays: number,
  startDate: string,
  endDate: string,
) => {
  let price;
  let totalPrice = 0;

  for (const [serviceId, service] of Object.entries<Service>(services)) {
    let freeDaysInLoop = freeDays;
    let currentDate = moment(startDate);
    const end = moment(endDate);
    while (currentDate <= end) {
      [price, freeDaysInLoop] = calculatePriceDay(currentDate, serviceId, freeDaysInLoop, service);
      totalPrice = (totalPrice * 1000 + price * 1000) / 1000;
      currentDate.add(1, 'days');
    }
    console.log('-------------------');
  }
  return totalPrice;
};
