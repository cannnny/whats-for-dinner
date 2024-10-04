import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import Animation from "./Animation";
import { answer } from "./Atoms";
import { client } from "./Client";
import "../stylesheets/question.scss";

// microCMSから選択肢のデータを取得
const getData = await client.get({
  endpoint: "results",
  queries: { limit: 99 },
});

const Question = () => {
  const data = getData.contents;

  // 取得した選択肢の「カテゴリー」が単数(文字列)か複数(配列)かで場合分け
  const uniqueCategories = new Set();
  data.forEach((item) => {
    if (typeof item.category === "string") {
      uniqueCategories.add(item.category);
    } else if (Array.isArray(item.category)) {
      item.category.map((category) => uniqueCategories.add(category));
    }
  });
  const categoryArray = Array.from(uniqueCategories);

  // 取得した選択肢の「材料」が単数(文字列)か複数(配列)かで場合分け
  const uniqueMaterials = new Set();
  data.forEach((item) => {
    if (typeof item.material === "string") {
      uniqueMaterials.add(item.material);
    } else if (Array.isArray(item.material)) {
      item.material.map((material) => uniqueMaterials.add(material));
    }
  });
  const materialArray = Array.from(uniqueMaterials);

  // 取得した選択肢にタグ付けされている「気分」が単数(文字列)か複数(配列)かで場合分け
  const uniqueFeelings = new Set();
  data.forEach((item) => {
    if (typeof item.feeling === "string") {
      uniqueFeelings.add(item.feeling);
    } else if (Array.isArray(item.feeling)) {
      item.feeling.map((feeling) => uniqueFeelings.add(feeling));
    }
  });
  const feelingArray = Array.from(uniqueFeelings);

  // ページごとに内容を設定
  const questions = [
    { id: 1, content: materialArray },
    { id: 2, content: categoryArray },
    { id: 3, content: feelingArray },
  ];

  // ページのURLに対応した内容をpageDataとしてセット
  const { id } = useParams();
  const pageData = questions.find((item) => item.id === Number(id));

  // 選択された答えをセットするstateを用意
  const [answerState, setAnswerState] = useAtom(answer);

  // 選択肢をクリックしたらanswerStateに答えをセットし、次のページへ(最終ページの場合は結果画面へ)
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

  // プログレスバー用配列
  const steps = [1, 2, 3];

  return (
    <Animation initialAnimation={{ x: "100%" }}>
      <div className="wrapper">
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
        <div className="question-container">
          <p>今の気分は？</p>
        </div>
        <div className="question-wave">
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
        <div className="list answer-list">
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

export default Question;
