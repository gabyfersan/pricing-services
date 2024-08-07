// pricing.js
import moment from 'moment';
import { basePrices, customers } from './data';
import { Customer, Discount, Service } from './types';

const isWorkingDay = (date: string, serviceId: string) => {
  const day = moment(date).day(); // Sunday = 0, Saturday = 6
  // console.log(
  //   'in function isWorkingDay',
  //   basePrices[serviceId].workingDay,
  //   serviceId,
  //   basePrices[serviceId].workingDay.includes(day),
  //   day,
  // );
  return basePrices[serviceId].workingDay.includes(day);
};

const calculateDiscountedPrice = (price: number, currentDate: moment.Moment, discount: Discount) => {
  let discountPrice = price;
  const discountStart = moment(discount.startDateDiscount);
  const discountEnd = moment(discount.endDateDiscount);
  //console.log("discountStart and discount.start",discountStart, discount.start)
  if (discount.startDateDiscount === undefined || (currentDate >= discountStart && currentDate <= discountEnd)) {
    // console.log("discountPrice",discountPrice)
    discountPrice = (price * 1000 * (1 - discount.discount)) / 1000;
    // console.log("discountPrice",discountPrice)
    // console.log("procent 2", 1 - discount.discount)
    // console.log("currentDate >= discountStart", currentDate >= discountStart)
    // console.log("currentDate",currentDate)
    // console.log("discountStart",discountStart)
    // console.log("discountEnd",discountEnd)
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

  const isServiceWorkingDay = isWorkingDay(currentDate.format('YYYY-MM-DD'), serviceId);
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
  if (!customer) throw new Error('Customer not found');
  let price;

  let totalPrice = 0;

  //console.log("Object.entries<Service>(customer.services)", Object.entries<Service>(customer.services))
  //console.log("customer.services",customer.services)
  for (const [serviceId, service] of Object.entries<Service>(customer.services)) {
    let freeDays = customer.freeDays;
    let currentDate = moment(startDate);
    const end = moment(endDate);
    //console.log("serviceId",serviceId)
    //console.log("service",service)
    while (currentDate <= end) {
      [price, freeDays] = calculatePriceDay(currentDate, serviceId, freeDays, service);
      //console.log('[price, totalPrice]', price, totalPrice);
      totalPrice = (totalPrice * 1000 + price * 1000) / 1000;
      currentDate.add(1, 'days');
    }
    console.log('-------------------');
  }
  return totalPrice;
};
