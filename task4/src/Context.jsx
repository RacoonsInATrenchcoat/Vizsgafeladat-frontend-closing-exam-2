import React, { createContext, useState, useContext } from "react";

const FilterContext = createContext();

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};

export const FilterProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <FilterContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </FilterContext.Provider>
  );
};
