import React, { useState } from "react";
import "./App.scss";
import Edit from "./components/Pages/Edit";
import Home from "./components/Pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import View from "./components/Pages/View";

function App() {
  const [entryArr, setEntryArr] = useState([]);
  const [view, setView] = useState(null);

  const handleSave = (entry, date) => {
    setEntryArr([...entryArr, { id: uuidV4(), entry: entry, date: date }]);
  };

  const getViewId = (id) => {
    setView(entryArr.filter((item) => id === item.id));
  };

  const handleDelete = () => {
    setEntryArr(entryArr.filter((item) => view[0].id !== item.id));
    setView(null);
  };

  const handleUpdate = (id, entry) => {
    const newData = entryArr.map((item) => {
      if (item.id === id) {
        return { ...item, entry: entry };
      }
      return item;
    });
    setEntryArr(newData);
    setView(null);
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div id="header">
          <span>Diary</span>
          <div id="menu">_</div>
        </div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home arr={entryArr} viewId={getViewId} />}
            />
            <Route
              path="/edit"
              element={
                <Edit
                  handleSave={handleSave}
                  handleUpdate={handleUpdate}
                  view={view}
                  setView={setView}
                />
              }
            />
            <Route
              path="/view"
              element={
                <View
                  obj={view}
                  handleDelete={handleDelete}
                  setView={setView}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
