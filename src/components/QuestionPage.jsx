import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import Animation from "./Animation";
import { answer } from "./Atoms";
import { client } from "./Client";

const getData = await client.get({
  endpoint: "results",
});

const QuestionPage = () => {
  // 画面上に質問、画面下にラジオボタン選択肢（=MicroCMSのタグ）
  // ページごとに選択肢を配列として入れておいて渡す？
  // 選択されたものをResultコンポーネントに渡す（ジャンル、食材、気分）
  // 進捗バーをクリックすることで前のページに戻る
  // 読み込むたびにアニメーション
  const data = getData.contents;

  const uniqueCategories = new Set();
  data.forEach((item) => {
    if (typeof item.category === "string") {
      uniqueCategories.add(item.category);
    } else if (Array.isArray(item.category)) {
      item.category.map((category) => uniqueCategories.add(category));
    }
  });

  const categoryArray = Array.from(uniqueCategories);

  const uniqueMaterials = new Set();
  data.forEach((item) => {
    if (typeof item.material === "string") {
      uniqueMaterials.add(item.material);
    } else if (Array.isArray(item.material)) {
      item.material.map((material) => uniqueMaterials.add(material));
    }
  });

  const materialArray = Array.from(uniqueMaterials);

  const uniqueFeelings = new Set();
  data.forEach((item) => {
    if (typeof item.feeling === "string") {
      uniqueFeelings.add(item.feeling);
    } else if (Array.isArray(item.feeling)) {
      item.feeling.map((feeling) => uniqueFeelings.add(feeling));
    }
  });

  const feelingArray = Array.from(uniqueFeelings);

  const questions = [
    { id: 1, content: categoryArray },
    { id: 2, content: materialArray },
    { id: 3, content: feelingArray },
  ];

  const { id } = useParams();
  const pageData = questions.find((element) => element.id === Number(id));

  const [answerState, setAnswerState] = useAtom(answer);

  const navigate = useNavigate();
  const nextPage = (selectedAnswer) => {
    setAnswerState((prev) => ({
      ...prev,
      [`answer${pageData.id}`]: selectedAnswer,
    }));

    if (pageData.id !== 3) {
      navigate(`/${Number(id) + 1}`);
    } else {
      navigate("/result");
    }
  };

  const steps = [1, 2, 3];

  return (
    <Animation initialAnimation={{ x: "100%" }}>
      <div className="wrapper">
        <div>
          <ul className="progressbar">
            {/* クラスを付け替える　*/}
            {steps.map((step, index) => {
              return (
                <li
                  className={`step ${step === pageData.id ? "active" : ""}`}
                  key={index}
                >
                  {step}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="top-container">
          <p>今の気分は？</p>
        </div>
        <div className="answer-list">
          {pageData.content.map((select, index) => {
            return (
              <div className="answer-item" key={index}>
                <button
                  onClick={() => {
                    nextPage(select);
                  }}
                >
                  {select}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </Animation>
  );
};

export default QuestionPage;
