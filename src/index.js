import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheets/reset.css";
import "./stylesheets/App.scss";
import Splash from "./components/Splash";
import Home from "./components/Home";
import Question from "./components/Question";
import Result from "./components/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<Question />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
