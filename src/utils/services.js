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

export function filterClassesQuery(subject, courseNum, arr) {
  var filtered = [];
  subject = subject.toUpperCase();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].prefix === subject && arr[i].courseNumber === courseNum) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
}

export function getGradeValue(letter) {
  switch (letter) {
    case "A+":
      return 4.0;

    case "A":
      return 3.8;

    case "A-":
      return 3.67;

    case "B+":
      return 3.33;

    case "B":
      return 3.0;

    case "B-":
      return 2.67;

    case "C+":
      return 2.33;

    case "C":
      return 2.0;

    case "D":
      return 1.0;

    default:
      return 0.0;
  }
}

export function getGradedClasses(arr) {
  var filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].grade && arr[i].grade !== "Ongoing") {
      filtered.push(arr[i]);
    }
  }

  return filtered;
}

export function getCumulativeGPA(arr) {
  const filtered = getSemesterGPA(getGradedClasses(arr));
  return filtered;
}

export function getSemesterCredits(arr) {
  var totalCredits = 0;
  var totalGradePoint = 0;
  for (let i = 0; i < arr.length; i++) {
    totalCredits += arr[i].credits;
    totalGradePoint += getGradeValue(arr[i].grade) * arr[i].credits;
    console.log("grade", getGradeValue(arr[i].grade));
  }

  console.log("totalCredits", totalCredits);
  console.log("totalGpaPoint", totalGradePoint);

  return [totalCredits, totalGradePoint];
}

export function getSemesterGPA(arr) {
  const semesterGPA = getSemesterCredits(arr);
  return semesterGPA[1] / semesterGPA[0];
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

export function getSemestersAttended(arr) {
  var semesters = [];
  var obj = { semester: null, year: null };
  for (let i = 0; i < arr.length; i++) {
    var obj = { semester: arr[i].semester, year: arr[i].year };
    semesters.push(obj);
  }

  const filtered = [];
  const map = new Map();
  for (const item of semesters) {
    if (!map.has(`${item.semester}${item.year}`)) {
      map.set(`${item.semester}${item.year}`);
      filtered.push({
        semester: item.semester,
        year: item.year
      });
    }
  }

  return filtered;
}

export function getSchedule(arr) {
  var filter = [];
  var obj = {
    title: null,
    daysOfWeek: [],
    startTime: null,
    endTime: null,
    start: null,
    end: null
  };
  for (let i = 0; i < arr.length; i++) {
    obj.title = `${arr[i].prefix} ${arr[i].courseNumber}`;
    obj.daysOfWeek = obj.daysOfWeek.push([arr[i].days[0].day]); //[1,2,3]
    obj.startTime = arr[i].days[0].hours[0]; //'12:00:00
    obj.endTime = arr[i].days[0].hours[1]; //14:00:00
    obj.start = arr[i].duration.start; //"2020-12-27"
    obj.end = arr[i].duration.end; //"2020-12-31"
    obj.filter.push(obj);
  }

  return obj;
}

export function checkCartDuplicate(course, arr) {
  if (course.length <= 0) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]._id === course._id) {
      return true;
    }
  }
}
