import React from "react";
import "./App.css";
import List from "./components/List/List";
import getRandomColor from "./utils/getRandomColor";

function App() {
  return (
    <div
      className="container"
      style={{
        backgroundColor: getRandomColor(),
      }}
    >
      <List />
    </div>
  );
}

export default App;
