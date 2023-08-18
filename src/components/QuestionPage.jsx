import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Animation from "./Animation";

const QuestionPage = () => {
  // 画面上に質問、画面下にトグルボタン選択肢（=MicroCMSのタグ）
  // ページごとに選択肢を配列として入れておいて渡す？
  // 選択されたものをResultコンポーネントに渡す（ジャンル、食材、気分）
  // 進捗バーをクリックすることで前のページに戻る
  // 読み込むたびにアニメーション

  const questions = [
    { id: 1, name: "category", content: ["和食", "洋食", "中華", "おまかせ"] },
    {
      id: 2,
      name: "material",
      content: ["肉", "魚", "野菜", "米", "パン", "麺", "おまかせ"],
    },
    { id: 3, name: "feeling", content: ["がっつり", "さっぱり"] },
  ];

  const { id } = useParams();
  const pageData = questions.find((element) => element.id === Number(id));
  const navigate = useNavigate();
  const onClick = () => {
    if (pageData.id !== 3) {
      navigate(`/${Number(id) + 1}`);
    } else {
      console.log("Result");
    }
  };

  return (
    <Animation initialAnimation={{ x: "100%" }}>
      <div className="container">
        <div>
          {/* クラスを付け替える　*/}
          {/* 即時関数以外の方法あり？ */}
          {(() => {
            const steps = [];
            for (let i = 1; i <= 3; i++) {
              steps.push(
                <li
                  className={`step ${i === pageData.id ? "active" : ""}`}
                  key={i}
                  onClick={() => {
                    navigate(`/${i}`);
                  }}
                >
                  {i}
                </li>
              );
            }
            return <ul className="progressbar">{steps}</ul>;
          })()}
        </div>
        <div className="question-container">
          <p>今の気分は？</p>
        </div>
        <div className="answer-container">
          {pageData.content.map((element, index) => {
            return (
              <div className="answer-button" key={index}>
                <button onClick={onClick}>{element}</button>
              </div>
            );
          })}
        </div>
      </div>
    </Animation>
  );
};

export default QuestionPage;
