import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Animation from "./Animation";
import "../stylesheets/splash.scss";

// アプリを開いた時の初期画面
// useEffect + setTimeout + useNavigate
const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <Animation initialAnimation={false}>
      <div className="splash">
        <h1>きょう何食べる？</h1>
        <img src="./dinner.jpg" alt="" />
      </div>
    </Animation>
  );
};

export default Splash;
// 入りと終わりにアニメーションをつける
