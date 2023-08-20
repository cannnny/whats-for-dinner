import React from "react";
import { Link } from "react-router-dom";

const Result = () => {
  return (
    <div className="wrapper result-wrapper">
      <div className="top-container">結果</div>
      <div className="bottom-container">
        <ul className="result-list">
          <li>麻婆豆腐</li>
          <li>鍋</li>
          <li>青椒肉絲</li>
        </ul>
      </div>
      <button className="retry-button">
        <Link to="/1">はじめから</Link>
      </button>
    </div>
  );
};

export default Result;
