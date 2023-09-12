import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { client } from "./Client";
import "../stylesheets/result.scss";

const ResultRandom = () => {
  const [data, setData] = useState([]);

  function getRandomUniqueData(data) {
    const count = 3;
    const min = 0;
    const max = data.length - 1;

    if (count > max - min + 1 || max < min) {
      throw new Error("Invalid input range or count");
    }

    const uniqueDatas = new Set();

    while (uniqueDatas.size < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueDatas.add(data[randomNumber]);
    }

    return Array.from(uniqueDatas);
  }

  useEffect(() => {
    client
      .get({
        endpoint: "results",
        queries: {
          limit: 99,
        },
      })
      .then((res) => {
        const randomData = getRandomUniqueData(res.contents);
        setData(randomData);
      });
  }, []);

  return (
    <div className="wrapper result-wrapper">
      <div className="question-container">結果</div>
      <div className="bottom-container">
        {data.length > 0 ? (
          <ul className="list result-list">
            {data.map((menu, index) => {
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

export default ResultRandom;
