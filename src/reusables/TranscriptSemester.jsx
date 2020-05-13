import React from "react";
import { getSemestersAttended } from "../utils/services";

const TranscriptSemester = (props) => {
  const { btnStyles, listingStyle, titleStyle } = styles;
  const {
    onSemesterChange,
    activeSemester,
    activeYear,
    semesterClasses,
    viewTranscript,
    printTranscript,
    onMouseHoverPrint,
    onMouseHoverTranscript,
    onMouseLeave,
    onPrintTranscript,
  } = props;
  const semesters = getSemestersAttended(semesterClasses);

  return (
    <div className="main">
      <button
        onMouseEnter={onMouseHoverTranscript}
        onMouseLeave={onMouseLeave}
        style={btnStyles}
        className={`btn-sm ${viewTranscript ? "btn-info" : null}`}
      >
        VIEW TRANSCRIPT
      </button>
      <br />
      <button
        onMouseEnter={onMouseHoverPrint}
        onMouseLeave={onMouseLeave}
        onClick={onPrintTranscript}
        style={btnStyles}
        className={`btn-sm ${printTranscript ? "btn-info" : null}`}
      >
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
  btnStyles: {
    marginLeft: width / 13,
    borderRadius: 20,
    border: "solid",
    borderColor: "#ffffff",
    marginTop: height / 13,
    height: height / 12,
    width: width / 8,
  },
  listingStyle: {
    marginLeft: width / 13,
    borderRadius: 3,
    height: height / 12,
    width: width / 8,
  },
  titleStyle: {
    marginLeft: width / 13,
    backgroundColor: "#001be6",
    color: "#ffffff",
    marginTop: height / 40,
    borderRadius: 3,
    height: height / 12,
    width: width / 8,
  },
};

export default TranscriptSemester;
