import React from "react";
import { Link } from "react-router-dom";

const Category = (props) => {
  return props.questions.category.map((element, index) => {
    return (
      <div className="answer-button" key={index}>
        <label>
          <Link to="/">
            <input type="radio" name="category" value={element} />
            {element}
          </Link>
        </label>
      </div>
    );
  });
};

export default Category;
