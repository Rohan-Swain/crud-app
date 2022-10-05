import "./index.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrayObj from "../../ArrayObj";

function Edit({ handleSave, handleUpdate, view, setView }) {
  const [textAreaData, setTextAreaData] = useState("");

  const DayAndDate = () => {
    let dt = new Date();
    let date = dt.getDate();
    let day = dt.getDay();
    let month = dt.getMonth();
    let year = dt.getFullYear().toString().split("0");
    year = eval(year[1]);
    return { day, date, month, year };
  };

  const handleChange = (e) => {
    setTextAreaData(e.target.value);
  };

  const onSave = () => {
    if (view === null) {
      handleSave(textAreaData, DayAndDate());
    } else {
      handleUpdate(view[0].id, textAreaData);
    }
  };

  return (
    <div id="editPage">
      <span id="heading">{view === null ? "New Entry" : "Update Entry"}</span>
      <div id="calenderData">
        <div id="day-date">
          <span id="date">{DayAndDate().date}</span>
          <span id="day">{ArrayObj().dayArr[DayAndDate().day]}</span>
        </div>
        <span id="month">{ArrayObj().monthArr[DayAndDate().month]},</span>
        <span id="year">{DayAndDate().year}</span>
      </div>
      <textarea
        id="dataField"
        type={"text"}
        placeholder={"How was your day today???"}
        onChange={handleChange}
        defaultValue={view !== null ? view[0].entry : ""}
      />
      <div id="buttonDiv">
        <Link
          to={"/"}
          className="btn btn-discard"
          onClick={() => setView(null)}
        >
          Discard
        </Link>
        <Link to={"/"} className="btn btn-save" onClick={onSave}>
          Save
        </Link>
      </div>
    </div>
  );
}

export default Edit;
