import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// アプリを開いた時の初期画面
// useEffect + setTimeout + useNavigate
const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("1");
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="splash">
      <h1>きょう何食べる？</h1>
      <img src="./dinner.jpg" alt="" />
    </div>
  );
  // 入りと終わりにアニメーションをつける
};

export default Splash;
