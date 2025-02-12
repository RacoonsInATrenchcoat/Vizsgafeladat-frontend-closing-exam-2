import React, { createContext, useState, useContext } from "react";

// Create Context
const FilterContext = createContext();

// Custom Hook to access context easily
export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};

// Provider Component (wraps the entire app)
export const FilterProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <FilterContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </FilterContext.Provider>
  );
};
