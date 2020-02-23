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

export function getClassDetails() {
  const currentCourses = data.currentClasses;
  var filtered = [];
  var obj = {
    id: null,
    startTime: null,
    endTime: null,
    courseNumber: null,
    room: null
  };
  for (let i = 0; i < currentCourses.length; i++) {
    obj.id = i;
    obj.courseNumber =
      currentCourses[i].prefix + " " + currentCourses[i].courseNumber;
    obj.room = currentCourses[i].room;
    obj.startTime = new Date(2020, 5, 20, 9, 30);
    obj.endTime = new Date(2020, 5, 20, 11, 30);
    filtered.push(obj);
  }

  return filtered;
}
