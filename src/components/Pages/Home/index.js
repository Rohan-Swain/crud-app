import React from "react";
import { Link } from "react-router-dom";
import EntryBox from "../../EntryBox";
import "./index.scss";

function Home({ arr, viewId }) {
  const Homeview = () => {
    return arr.map((item) => (
      <EntryBox
        key={arr.indexOf(item)}
        arrIndex={arr.indexOf(item)}
        id={item.id}
        date={item.date}
        entry={item.entry}
        viewId={viewId}
      />
    ));
  };
  return (
    <>
      <div id="homepage" className={`${arr.length === 0 ? "align" : ""}`}>
        {arr.length !== 0 ? <Homeview /> : "no entries"}
      </div>
      <Link to={"/edit"} id={"create"}>
        +
      </Link>
    </>
  );
}

export default Home;
