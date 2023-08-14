const Question = () => {
  // 画面上に質問、画面下にトグルボタン選択肢（=MicroCMSのタグ）
  // ページごとに選択肢を配列として入れておいて渡す？
  // 選択されたものをResultコンポーネントに渡す（ジャンル、食材、気分）
  // 進捗バーをクリックすることで前のページに戻る
  // 読み込むたびにアニメーション

  const category = ["和食", "洋食", "中華", "おまかせ"];
  const material = ["肉", "魚", "野菜", "米", "パン", "麺", "おまかせ"];
  const feeling = ["がっつり", "さっぱり"];

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
        {/* 1ページ目はcategory、2ページ目はmaterial、3ページ目はfeeling */}
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

export default Question;
