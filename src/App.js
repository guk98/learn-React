import Greeting from "./components/Greeting";
import Button from "./components/Button";

function App() {
  const handleClick = (data) => {
    console.log("클릭. :", data);
  };

  return (
    <div className="wrap">
      Hello world
      <Greeting />
      <Greeting />
      <Greeting />
      <Button text="첫번째 버튼" onButtonClick={handleClick} />
      <Button text="두번째 버튼" onButtonClick={handleClick} />
    </div>
  );
}

export default App;
