import data from "./mockData";

export function getMockData() {
  return data;
}

export function getDay(num) {
  switch (num) {
    case 0:
      return "SUNDAY";
      break;
    case 1:
      return "MONDAY";
      break;
    case 2:
      return "TUESDAY";
      break;
    case 3:
      return "WEDNESDAY";
      break;
    case 4:
      return "THURSDAY";
      break;
    case 5:
      return "FRIDAY";
      break;
    case 6:
      return "SATURDAY";
      break;
    default:
      break;
  }
}

export function getMonth(num) {
  switch (num) {
    case 0:
      return "JANUARY";
      break;
    case 1:
      return "FEBRUARY";
      break;
    case 2:
      return "MARCH";
      break;
    case 3:
      return "APRIL";
      break;
    case 4:
      return "MAY";
      break;
    case 5:
      return "JUNE";
      break;
    case 6:
      return "JULY";
      break;
    case 7:
      return "AUGUST";
      break;
    case 8:
      return "SEPTEMBER";
      break;
    case 9:
      return "OCTOBER";
      break;
    case 10:
      return "NOVEMBER";
      break;
    case 11:
      return "DECEMBER";
      break;
    default:
      break;
  }
}
