import React, { useState } from "react";
import Button from "./Button";

const Greeting = () => {
  //logic
  // let username = "사용자 ";
  // username : 데이터, setUsername : 데이터의 값을 변경하는 함수(함수명 camelCase)
  const [username, setUsername] = useState("사용자");

  const handleClick = () => {
    console.log("click");
    // 사용자 입력받기
    const result = window.prompt("이름을 입력해주세요");
    setUsername(result);
    // 받은값을 username에 할당
  };

  //view
  return (
    <div className="greeting">
      <h1>안녕하세요, {username}님!</h1>
      <p>오늘도 따뜻한 하루 되세요~</p>
      <button type="button" onClick={handleClick}>
        이름바꾸기
      </button>
      <Button />
      {/* 버튼태그를 컴포넌트로 만들고 불러오기 */}
    </div>
  );
};

export default Greeting;
