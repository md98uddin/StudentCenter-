import React from "react";

const AdviserCard = props => {
  const { main } = styles;
  return (
    <div className="card" style={main}>
      <div className="card-body">
        <h5 className="card-title">{props.adviser.name}</h5>
        <p className="card-text">
          Melissa Wise has been an advisor for nine years and has plenty of
          experience guiding students to success.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{`Room: ${props.adviser.room}`}</li>
        <li className="list-group-item">{`Hours: ${props.adviser.hours}`}</li>
        <li className="list-group-item">{`Contact: ${props.adviser.contact}`}</li>
      </ul>
    </div>
  );
};

const styles = { main: { width: "18rem", marginLeft: 560, marginTop: 135 } };

export default AdviserCard;
