import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import ArrayObj from "../../ArrayObj";
import CalenderData from "../../CalenderData";

function View({ obj, handleDelete, setView }) {
  return (
    <div id="viewpage">
      <div id="headingWrapper">
        <Link to={"/"} className="back-button" onClick={() => setView(null)}>
          {"<"}
        </Link>
        <CalenderData
          day={ArrayObj().dayArr[obj[0].date.day]}
          date={obj[0].date.date}
          month={ArrayObj().monthArr[obj[0].date.month]}
          year={obj[0].date.year}
        />
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
