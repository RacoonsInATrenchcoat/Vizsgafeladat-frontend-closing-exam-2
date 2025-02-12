import React, { useState } from "react";
import { useFilter } from "./Context";

const Filter = () => {
  const { setSearchQuery } = useFilter();  
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setSearchQuery(input);      //Setting the global context search text
  };

  return (
    <div className="d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search cats..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Filter;
