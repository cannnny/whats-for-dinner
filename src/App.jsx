import React from "react";
// import Splash from "./components/Splash";

const App = () => {
  return <Question />;
};

export default App;
// 後でコンポーネントごとに分ける
const Question = () => {
  // 画面上に質問、画面下にトグルボタン選択肢（=MicroCMSのタグ）
  // ページごとに選択肢を配列として入れておいて渡す？
  // 選択されたものをResultコンポーネントに渡す（ジャンル、食材、気分）
  // 進捗バーをクリックすることで前のページに戻る
  // 読み込むたびにアニメーション

  const category = ["和食", "洋食", "中華", "おまかせ"];

  return (
    <div className="container">
      <div>
        {/* クラスを付け替える　*/}
        <ul className="progressbar">
          <li className="step active">1</li>
          <li></li>
          <li className="step">2</li>
          <li></li>
          <li className="step">3</li>
        </ul>
      </div>
      <div className="question-container">
        <p>今の気分は？</p>
      </div>
      <div className="answer-container">
        {category.map((element, index) => {
          return (
            <div className="answer-button" key={index}>
              <label>
                <input type="radio" name="category" value={element} />
                {element}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// const Result = () => {
//   // Question画面での選択肢を受け取る
//   // 受け取った選択肢のタグを持つ料理を3つ表示する
//   // 「おまかせ」の場合は全ての選択肢の中から選択
//   // 画面下に「最初に戻る」リンク
// };
