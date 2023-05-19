import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

export default function HomePage(props) {
  return (
    <div className="homePage">
      <Header text={props.text} />
      <div className="search">
        <SearchBar />
      </div>
      <div>
        <EmployeeList />
      </div>
    </div>
  );
}
