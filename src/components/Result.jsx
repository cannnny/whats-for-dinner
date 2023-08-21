import React from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { answer } from "./Atoms";

const Result = () => {
  const [answerState, setAnswerState] = useAtom(answer);
  const answersArray = Object.values(answerState);
  return (
    <div className="wrapper result-wrapper">
      <div className="top-container">結果</div>
      <div className="bottom-container">
        <ul className="result-list">
          {answersArray.map((menu, index) => {
            return <li key={index}>{menu}</li>;
          })}
        </ul>
      </div>
      <button className="retry-button">
        <Link to="/1">最初から</Link>
      </button>
    </div>
  );
};

export default Result;
