import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"; // з нього неявно імпортується createRoot
import { StrictMode } from "react";

import "./index.css";

import App from "./components/app/app.jsx";
import HomePage from "./components/pages/home-page.jsx/home-page.jsx";
import PassPage from "./components/pages/pass-page/pass-page.jsx";
import SpacePage from "./components/pages/space-page/space-page.jsx";
import AboutPage from "./components/pages/about-page/about-page.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="pass" element={<PassPage />} />
          <Route path="space" element={<SpacePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
