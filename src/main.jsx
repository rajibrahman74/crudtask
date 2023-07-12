import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Employee from "./components/Employee";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* main Employee components */}
    <Employee />
  </React.StrictMode>
);
