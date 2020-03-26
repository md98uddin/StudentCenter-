import React from "react";
import {
  getSemesterGPA,
  getClassBySemesterYear,
  getSemesterCredits,
  getCumulativeGPA
} from "../utils/services";

const GradesOverview = props => {
  const { overview, semesterClasses, activeSemester, activeYear } = props;

  //current semester GPA
  var semesterGPA = getSemesterGPA(
    getClassBySemesterYear(activeSemester, activeYear, semesterClasses)
  );

  //current semester credits
  var semesterCredits = getSemesterCredits(
    getClassBySemesterYear(activeSemester, activeYear, semesterClasses)
  );

  //total credits
  var totalCredits = getSemesterCredits(semesterClasses);

  //cumulative gpa
  var cumulativeGPA = getCumulativeGPA(semesterClasses);

  return (
    <table style={overview} className="table">
      <thead>
        <tr scope="row">
          <th scope="col">Semester GPA</th>
          <th scope="col">Cumulative GPA</th>
          <th scope="col">Semester Credits</th>
          <th scope="col">Total Credits</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ marginBottom: "0px" }}>
          <td>{semesterGPA.toFixed(2)}</td>
          <td>{cumulativeGPA.toFixed(2)}</td>
          <td>{semesterCredits[0]}</td>
          <td>{totalCredits[0]}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default GradesOverview;
