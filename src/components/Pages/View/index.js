import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import ArrayObj from "../../ArrayObj";

function View({ obj, handleDelete, setView }) {
  return (
    <div id="viewpage">
      <div id="headingWrapper">
        <Link to={"/"} className="back-button" onClick={() => setView(null)}>
          {"<"}
        </Link>
        <div id="calenderData">
          <div id="day-date">
            <span id="day">{ArrayObj().dayArr[obj[0].date.day]}</span>
            <span id="date">{obj[0].date.date}</span>
          </div>
          <span id="month">{ArrayObj().monthArr[obj[0].date.month]},</span>
          <span id="year">{obj[0].date.year}</span>
        </div>
      </div>
      <textarea id="dataField" type={"text"} value={obj[0].entry} readOnly />
      <div id="buttonDiv">
        <Link to={"/"} className="btn btn-delete" onClick={handleDelete}>
          Delete
        </Link>
        <Link to={"/edit"} className="btn btn-edit">
          Edit
        </Link>
      </div>
    </div>
  );
}

export default View;
