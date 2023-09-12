import { Link } from "react-router-dom";
import Animation from "./Animation";
import "../stylesheets/home.scss";

const Home = () => {
  return (
    <Animation initialAnimation={{ x: "100%" }}>
      <div className="home">
        <div className="logo-container">
          <div className="logo">きょう何食べる？</div>
          <div className="wave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div className="button-container">
          <button>
            <Link to="/1">
              <img src="btn-choice.png" alt="気分で選ぶ" />
            </Link>
          </button>
          <button>
            <Link to="/result_random">
              <img src="btn-random.png" alt="おまかせする" />
            </Link>
          </button>
        </div>
      </div>
    </Animation>
  );
};

export default Home;
