import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { client } from "./Client";
import "../stylesheets/result.scss";

// おまかせを選択した場合のコンポーネント
const ResultRandom = () => {
  const [data, setData] = useState([]);

  // ランダムな数字を出力
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

  // microCMSからデータを取得
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
      <button className="retry-button">
        <Link to="/Home">←最初から</Link>
      </button>
    </div>
  );
};

export default ResultRandom;
