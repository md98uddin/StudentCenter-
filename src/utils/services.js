import data from "./mockData";

export function getMockData() {
  return data;
}

export function getDay(num) {
  switch (num) {
    case 0:
      return "SUNDAY";
    case 1:
      return "MONDAY";

    case 2:
      return "TUESDAY";

    case 3:
      return "WEDNESDAY";

    case 4:
      return "THURSDAY";

    case 5:
      return "FRIDAY";

    case 6:
      return "SATURDAY";

    default:
  }
}

export function formatCount(num) {
  var format = num
    .toFixed(2)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  return format;
}

export function getCampus(num) {
  switch (num) {
    case 1234:
      return "Hunter College";
    case 2345:
      return "Baruch College";

    case 3456:
      return "City College";

    case 4567:
      return "York College";
    default:
  }
}

export function getMonth(num) {
  switch (num) {
    case 0:
      return "JANUARY";

    case 1:
      return "FEBRUARY";

    case 2:
      return "MARCH";

    case 3:
      return "APRIL";

    case 4:
      return "MAY";

    case 5:
      return "JUNE";

    case 6:
      return "JULY";

    case 7:
      return "AUGUST";

    case 8:
      return "SEPTEMBER";

    case 9:
      return "OCTOBER";

    case 10:
      return "NOVEMBER";

    case 11:
      return "DECEMBER";

    default:
  }
}

export function getClassBySemesterYear(semester, year, arr) {
  var filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].semester === semester && arr[i].year === year) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
}
