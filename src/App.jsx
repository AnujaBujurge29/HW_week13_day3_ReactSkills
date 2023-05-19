import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Employee from "./Components/EmployeePage";

import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <h1>Vite Project</h1> */}
      <HomePage text="Employee Directory" />
      <Employee text="Employee" />
    </div>
  );
}
export default App;
