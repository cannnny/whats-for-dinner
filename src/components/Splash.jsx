import React from "react";

// アプリを開いた時の初期画面

const Splash = () => {
  return (
    <div className="splash">
      <h1>きょう何食べる？</h1>
      <img src="./dinner.jpg" alt="" />
    </div>
  );

  // 入りと終わりにアニメーションをつける
};

export default Splash;
