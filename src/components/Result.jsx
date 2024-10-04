import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { answer } from "./Atoms";
import { client } from "./Client";
import "../stylesheets/style.scss";

const Result = () => {
  // 選択された答えをセットするstateを用意
  const [answerState, setAnswerState] = useAtom(answer);
  const answersArray = Object.values(answerState);
  const [filteredData, setFilteredData] = useState([]);

  // microCMSからデータを取得(選択肢に応じてフィルターをかける)
  useEffect(() => {
    client
      .get({
        endpoint: "results",
        queries: {
          limit: 3,
          filters: `material[contains]${answersArray[0]}[and]feeling[contains]${answersArray[1]}`,
        },
      })
      .then((res) => {
        setFilteredData(res.contents);
      });
  }, [answersArray]);

  return (
    <div className="wrapper result-wrapper">
      <div className="question-container">結果</div>
      <div className="result-wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="bottom-container">
        {filteredData.length > 0 ? (
          <ul className="list result-list">
            {filteredData.map((menu, index) => {
              return (
                <li className="result-item" key={index}>
                  {menu.name}
                  <div className="accordion">
                    <p>材料：{menu.ingredients.join(", ")}</p>
                  </div>
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
