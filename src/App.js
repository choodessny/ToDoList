import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./components/List/List";
import getRandomColor from "./utils/getRandomColor";

function App() {
  return (
    <Routes>
      <Route
        path="/todoList"
        element={
          <div
            className="container"
            style={{
              backgroundColor: getRandomColor(),
            }}
          >
            <List />
          </div>
        }
      />
      <Route path="/already_done" element={"hi"} />
      <Route path="/" element={<Navigate to="/todoList" replace />} />
    </Routes>
  );
}

export default App;
