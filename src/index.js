import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./App.scss";
import Splash from "./components/Splash";
import QuestionPage from "./components/QuestionPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route path="/:id" element={<QuestionPage />} />
        {/* <Route path="result" element={<Result />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
