import React from "react";
import "./index.scss";

function CalenderData({ day, date, month, year }) {
  return (
    <div id="calenderData">
      <div id="day-date">
        <span id="date">{date}</span>
        <span id="day">{day}</span>
      </div>
      <span id="month">{month},</span>
      <span id="year">{year}</span>
    </div>
  );
}

export default CalenderData;
