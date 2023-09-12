import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { answer } from "./Atoms";
import { client } from "./Client";
import "../stylesheets/result.scss";

const Result = () => {
  const [answerState, setAnswerState] = useAtom(answer);
  const answersArray = Object.values(answerState);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    client
      .get({
        endpoint: "results",
        queries: {
          // limit: 3,
          filters: `category[contains]${answersArray[0]}[and]material[contains]${answersArray[1]}[and]feeling[contains]${answersArray[2]}`,
        },
      })
      .then((res) => {
        setFilteredData(res.contents);
      });
  }, [answersArray]);

  return (
    <div className="wrapper result-wrapper">
      <div className="question-container">結果</div>
      <div className="bottom-container">
        {filteredData.length > 0 ? (
          <ul className="list result-list">
            {filteredData.map((menu, index) => {
              return (
                <li className="result-item" key={index}>
                  {menu.name}
                </li>
              );
            })}
          </ul>
        ) : (
          <p>当てはまる料理はありません</p>
        )}
      </div>
      <button className="retry-button">
        <Link to="/Home">←最初から</Link>
      </button>
    </div>
  );
};

export default Result;
