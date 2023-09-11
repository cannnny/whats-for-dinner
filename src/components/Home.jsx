import "../stylesheets/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="logo">きょう何食べる？</div>
      <div className="wrapper">
        <button className="btn btn-choice">
          <img src="btn-choice.png" alt="気分で選ぶ" />
        </button>
        <button className="btn btn-random">
          <img src="btn-random.png" alt="おまかせする" />
        </button>
      </div>
    </div>
  );
};

export default Home;
