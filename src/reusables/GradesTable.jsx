import React from "react";
import { getClassBySemesterYear } from "../utils/services";
import GradesOverview from "./GradesOverview";
const GradesTable = props => {
  const { main, error, overview } = styles;
  const { semesterClasses, activeSemester, activeYear } = props;
  var filtered = getClassBySemesterYear(
    activeSemester,
    activeYear,
    semesterClasses
  );
  return (
    <div className="container">
      <table style={main} className="table">
        <thead>
          <tr>
            <th scope="col">Course</th>
            <th scope="col">Professor</th>
            <th scope="col">Grade</th>
            <th scope="col">Semester</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((filter, index) => (
            <tr key={index}>
              <td scope="row">{`${filter.prefix} ${filter.courseNumber}`}</td>
              <td>{filter.professor}</td>
              <td>{filter.grade ? filter.grade : "Ongoing"}</td>
              <td>{filter.semester}</td>
              <td>{filter.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <GradesOverview
        overview={overview}
        activeSemester={activeSemester}
        activeYear={activeYear}
        semesterClasses={semesterClasses}
      />
    </div>
  );
};
const { innerHeight: height, innerWidth: width } = window;

const styles = {
  main: {
    width: width / 2,
    height: height / 2,
    float: "right",
    marginRight: width / 10,
    marginTop: height / 15,
    color: "#000000",
    backgroundColor: "#ffffff",
    border: "solid",
    borderColor: "#053ef7"
  },
  overview: {
    width: width / 2,
    height: height / 7,
    float: "right",
    marginRight: width / 10,
    marginTop: height / 16,
    color: "#000000",
    backgroundColor: "#ffffff",
    border: "solid",
    borderColor: "#053ef7"
  },

  error: {
    marginLeft: width / 27,
    marginTop: height / 5,
    fontSize: height / 35,
    color: "#2d9132",
    fontWeight: "bold"
  }
};

export default GradesTable;
