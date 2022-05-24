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
              <Link to={"/already_done"}>
                <button className="button_next_page">
                  Открыть список сделанных задач
                </button>
              </Link>
            </div>
          </div>
        }
      />
      <Route
        path="/already_done"
        element={
          <div>
            <ListChecked />
          </div>
        }
      />
      <Route path="/" element={<Navigate to="/todoList" replace />} />
    </Routes>
  );
}

export default App;
