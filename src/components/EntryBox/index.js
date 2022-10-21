import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import ArrayObj from "../ArrayObj";

function EntryBox({ arrIndex, id, date, entry, viewId }) {
  return (
    <div id="entryBox" onClick={() => viewId(id)}>
      <Link to={"/view"} className="linkClass">
        <div
          id="dateBox"
          className={`${arrIndex % 2 !== 0 ? "evenDateBoxIndex" : ""}`}
        >
          <span id="day">{ArrayObj().dayArr[date.day]}</span>
          <span id="date">{date.date}</span>
        </div>
        <div
          id="value"
          className={`${arrIndex % 2 !== 0 ? "evenMonthIndex" : ""}`}
        >
          <span id="view_month">{ArrayObj().monthArr[date.month]}</span>
        </div>
        <span
          id="displayEntry"
          className={`${arrIndex % 2 !== 0 ? "evenDisplayIndex" : ""}`}
        >
          {entry}
        </span>
      </Link>
    </div>
  );
}

export default EntryBox;
