import { useState } from "react";
import { useEffect } from "react";

import GuessDisplay from "./components/GuessDisplay";

function App() {
  const [randomNum, setRandomNum] = useState(0);

  useEffect(() => {
    randomNumberGenerator();
  }, []);

  const randomNumberGenerator = () => {
    let num1 = Math.floor(Math.random() * 100) + 1;
    setRandomNum(num1);
    
  };

  return (
    <>
      <GuessDisplay ranNum={randomNum} />
    </>
  );
}
export default App;
