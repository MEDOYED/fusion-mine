import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router"; // з нього неявно імпортується createRoot
import { StrictMode } from "react";
import "./index.css";
import App from "./components/app/app.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
