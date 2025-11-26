import React from "react";

const Button = ({ text, onButtonClick }) => {
  // logic
  const handleClick = () => {
    //event를 통해 부모에게 데이터 전달
    onButtonClick(text);
  };

  // view
  return (
    <div className="button">
      <button type="button" onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
