import React from "react";

const GradesOverview = props => {
  const { overview } = props;
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
          <td>3.41</td>
          <td>3.10</td>
          <td>13</td>
          <td>108</td>
        </tr>
      </tbody>
    </table>
  );
};

export default GradesOverview;
