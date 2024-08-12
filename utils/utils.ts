import moment from 'moment';
import type { PriceCalculationRequest } from '../src/types';

enum Week {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 0,
}

export const onlyWeekDaysAreWorkingDay = [Week.Monday, Week.Tuesday, Week.Wednesday, Week.Thursday, Week.Friday];
export const allDaysAreWorkingDay = [
  Week.Monday,
  Week.Tuesday,
  Week.Wednesday,
  Week.Thursday,
  Week.Friday,
  Week.Saturday,
  Week.Sunday,
];

export const isWorkingDay = (date: string, workingDay: Array<number>) => {
  const day = moment(date).day(); // Sunday = 0, Saturday = 6
  return workingDay.includes(day);
};

export function validateInputs(request: PriceCalculationRequest) {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const customerIdRegex = /^[A-Z]$/;

  const { customerId, startDate, endDate } = request;

  if (!customerId || !startDate || !endDate) {
    return false;
  }

  if (dateRegex.test(startDate) < dateRegex.test(endDate)) { // Startdate  must be realier or the same days as enddate
    return false;
  }

  if (
    !moment(startDate, moment.HTML5_FMT.DATE, true).isValid() ||
    !moment(endDate, moment.HTML5_FMT.DATE, true).isValid()
  ) {
    return false;
  }

  if (!customerIdRegex.test(customerId)) {
    return false;
  }

  return true;
}
