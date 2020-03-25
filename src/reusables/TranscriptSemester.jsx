import React from "react";

const TranscriptSemester = props => {
  const { viewBtn, printBtn, listingStyle, titleStyle } = styles;
  const { onSemesterChange, activeSemester, activeYear } = props;
  const semesters = [
    { semester: "Fall", year: 2018 },
    { semester: "Spring", year: 2018 },
    { semester: "Fall", year: 2017 },
    { semester: "Spring", year: 2017 },
    { semester: "Fall", year: 2016 }
  ];

  return (
    <div className="main">
      <button style={viewBtn} className="btn-sm">
        VIEW TRANSCRIPT
      </button>
      <br />
      <button style={printBtn} className="btn-sm">
        PRINT TRANSCRIPT
      </button>
      <br />
      <ul className="list-group">
        <li style={titleStyle} className="list-group-item">
          SEMESTER
        </li>
        {semesters.map((semester, index) => (
          <button
            onClick={() => onSemesterChange(semester.semester, semester.year)}
            style={listingStyle}
            key={index}
            className={`btn-lg ${
              semester.semester === activeSemester &&
              semester.year === activeYear
                ? "btn-secondary"
                : null
            }`}
          >
            {`${semester.semester} ${semester.year}`}
          </button>
        ))}
      </ul>
    </div>
  );
};
const { innerHeight: height, innerWidth: width } = window;

const styles = {
  viewBtn: {
    marginLeft: width / 13,
    borderRadius: 20,
    border: "solid",
    borderColor: "#ffffff",
    marginTop: height / 13,
    height: height / 12,
    width: width / 8
  },
  printBtn: {
    marginLeft: width / 13,
    borderRadius: 20,
    border: "solid",
    borderColor: "#ffffff",
    marginTop: height / 40,
    height: height / 12,
    width: width / 8
  },
  listingStyle: {
    marginLeft: width / 13,
    borderRadius: 3,
    height: height / 12,
    width: width / 8
  },
  titleStyle: {
    marginLeft: width / 13,
    backgroundColor: "#001be6",
    color: "#ffffff",
    marginTop: height / 40,
    borderRadius: 3,
    height: height / 12,
    width: width / 8
  }
};

export default TranscriptSemester;
