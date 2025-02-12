import React from "react";
import Filter from "./Filter";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Cat Adoption</a>
        <Filter />
      </div>
    </nav>
  );
};

export default NavigationBar;
