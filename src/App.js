import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./components/List/List";
import ListChecked from "./components/ListChecked/ListChecked";
import getRandomColor from "./utils/getRandomColor";

function App() {
  return (
    <Routes>
      <Route
        path="/todoList"
        element={
          <div
            className="container_main"
            style={{
              backgroundColor: getRandomColor(),
            }}
          >
            <div className="container">
              <List />
            </div>
            <div className="button_next_page_container">
              <Link to={"/alreadydone"}>
                <button className="button_next_page">
                  Открыть список сделанных задач
                </button>
              </Link>
            </div>
          </div>
        }
      />
      <Route
        path="/alreadydone"
        element={
          <div
            className="container_main"
            style={{
              backgroundColor: getRandomColor(),
            }}
          >
            <div>
              <ListChecked />
            </div>
          </div>
        }
      />
      <Route path="/" element={<Navigate to="/todoList" replace />} />
    </Routes>
  );
}

export default App;
