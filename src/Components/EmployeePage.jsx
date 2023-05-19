import React from "react";
import Header from "./Header";

export default function EmployeePage(props) {
  return (
  
      <div className="employeepage">
        <div className="employeeHeader">
          <Header text={props.text} />
          <div className="main">
            <div className="info">
              <img
                className="image"
                src="../src/images/imageJuie.png"
                alt="icon"
              />
              <div>
                <h2>Julie Taylor</h2>
                <p> VP of Marketing</p>
              </div>
            </div>
            <div className="info">
              <h5>Call Office</h5>
              <p>781-000-0002</p>
            </div>
            <div className="info">
              <h5>Call Mobile</h5>
              <p>617-000-0002</p>
            </div>
            <div className="info">
              <h5>SMS</h5>
              <p>617-000-0002</p>
            </div>
            <div className="info">
              <h5>Email</h5>
              <p>jtaylor@fakemail.com</p>
            </div>
          </div>
        </div>
      </div>
  );
}