import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FilterProvider } from "./Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FilterProvider> {/* Needed to give the context */}
    <App />
  </FilterProvider>
);
