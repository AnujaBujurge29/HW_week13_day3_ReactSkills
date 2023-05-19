import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage'
import Employee from "./Components/EmployeePage";

import './App.css'

function App() {
  return (
    <div>
      <h1>Vite Project</h1>
      <Router>
        <Routes>
          <Route path="/HomePage" element={<HomePage/>}/>
          <Route path="/Employee" element={<Employee/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
