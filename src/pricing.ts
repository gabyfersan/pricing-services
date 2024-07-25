// pricing.js
import moment from 'moment';
import { customers, basePrices } from './customers';
import { Customer, Service, Discount } from './types';

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
  const discountStart = moment(discount.start);
  const discountEnd = moment(discount.end);
  //console.log("discountStart and discount.start",discountStart, discount.start)
  if (discount.start === undefined || (currentDate >= discountStart && currentDate <= discountEnd)) {
    // console.log("discountPrice",discountPrice)
    discountPrice = price * (1 - discount.discount);
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
  let price = service.price;

  const isServiceWorkingDay = isWorkingDay(currentDate.format('YYYY-MM-DD'), serviceId);
  if (!isServiceWorkingDay) {
    console.log('!isServiceWorkingDay', !isServiceWorkingDay);
    return [0, freeDays];
  }
  if (freeDays > 0) {
    console.log('freeDays', freeDays);
    //freeDays--;
    return [0, freeDays - 1];
  }

  //console.log("service.discounts",service.discounts)
  if (service.discounts) {
    service.discounts.forEach((discount: Discount) => {
      price = calculateDiscountedPrice(price, currentDate, discount);
    });

    console.log('price', price);
  }
  return [price, freeDays];
};
export const calculatePrice = (customerId: string, startDate: string, endDate: string) => {
  const customer: Customer = customers[customerId];
  if (!customer) throw new Error('Customer not found');
  let price;

  let totalPrice = 0;
  let freeDays = customer.freeDays;
  //console.log("Object.entries<Service>(customer.services)", Object.entries<Service>(customer.services))
  //console.log("customer.services",customer.services)
  for (const [serviceId, service] of Object.entries<Service>(customer.services)) {
    let currentDate = moment(startDate);
    const end = moment(endDate);
    //console.log("serviceId",serviceId)
    //console.log("service",service)
    while (currentDate <= end) {
      [price, freeDays] = calculatePriceDay(currentDate, serviceId, freeDays, service);
      //console.log("[price, freeDays]",price, freeDays)
      totalPrice += price;
      currentDate.add(1, 'days');
    }
  }
  return totalPrice;
};
