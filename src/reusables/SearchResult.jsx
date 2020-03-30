import React from "react";
import { checkCartDuplicate } from "../utils/services";

const SearchResult = ({ searchQuery, onSelect, shopCart }) => {
  const { main } = styles;
  return searchQuery ? (
    <table style={main} className="table">
      <thead style={{ backgroundColor: "#9e151e", color: "#ffffff" }}>
        <tr>
          <th scope="col">Course</th>
          <th scope="col">Professor</th>
          <th scope="col">Credits</th>
          <th scope="col">Days</th>
          <th scope="col">Time</th>
          <th scope="col">Select</th>
        </tr>
      </thead>
      <tbody style={{ backgroundColor: "#4d0917", color: "#ffffff" }}>
        {searchQuery.map((item, index) => (
          <tr key={item._id}>
            <td>{`${item.prefix} ${item.courseNumber}`}</td>
            <td>{item.professor}</td>
            <td>{item.credits}</td>
            <td>{`${item.days[0].day}`}</td>
            <td>{`${item.days[0].hours}`}</td>
            <td>
              {checkCartDuplicate(item, shopCart) === true ? (
                <p>In Cart</p>
              ) : (
                <button onClick={() => onSelect(item)} className="btn-sm">
                  +
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
};

const { innerHeight: height } = window;

const styles = { main: { marginTop: height / 15 } };

export default SearchResult;
