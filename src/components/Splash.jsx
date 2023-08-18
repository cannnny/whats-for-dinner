import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Animation from "./Animation";

// アプリを開いた時の初期画面
// useEffect + setTimeout + useNavigate
// 画像をスムーズに表示させたい
const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("1");
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <Animation initialAnimation={false}>
      <h1>きょう何食べる？</h1>
      <img src="./dinner.jpg" alt="" />
    </Animation>
  );
};

export default Splash;
// 入りと終わりにアニメーションをつける
