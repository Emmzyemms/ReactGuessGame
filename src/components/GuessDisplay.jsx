import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const GuessDisplay = ({ ranNum }) => {
  const [checkValue, setCheckValue] = useState(0);
  const [strOutPut, setStrOutPut] = useState("Start Guessing");
  const [correctAnsa, setCorrectAnsa] = useState(false);
  const [numAttem, setNumAttem] = useState(20);
  const [highScore, setHighScore] = useState(
    localStorage.getItem("highScore")
      ? parseInt(localStorage.getItem("highScore"))
      : 0
  );

  const inputHandler = (event) => {
    setCheckValue(parseInt(event.target.value));
  };
  useEffect(() => {
    if (correctAnsa) {
      setHighScore(numAttem);
      localStorage.setItem("highScore", numAttem.toString());
    }
  }, [correctAnsa, highScore, numAttem]);

  return (
    <div className="container">
      <div className="container w-[50%] mx-auto mt-[10rem] text-center bg-gray-600 rounded-2xl pt-3">
        <div className="h-10 w-20 bg-gray-500 ml-40 text-center justify-center rounded-full pt-2">
          <h1 className="text-2xl">{correctAnsa ? ranNum : "?"}</h1>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Guess The Number</h1>
        </div>

        <div>
          <p>
            Attem Score: <span>{numAttem}</span>
          </p>
          <p>
            Score ✅: <span>{highScore}</span>
          </p>
          <p>{strOutPut}</p>
        </div>
        <div className="mt-4">
          <input
          className="border-2 border-white outline-none rounded-sm"
            type="text"
            onChange={inputHandler}
            placeholder="Enter a Number"
          />
          <button
          className="bg-green-500 py-1 rounded-sm ml-3 px-5 tracking-wider"
            onClick={() => {
              if (!correctAnsa && numAttem > 0) {
                if (typeof checkValue !== "undefined") {
                  if (checkValue === ranNum) {
                    setStrOutPut("Correct Guess");
                    setCorrectAnsa(true);
                  } else {
                    setStrOutPut(
                      checkValue > ranNum ? "Guess Is Higher" : "Guess Is Lower"
                    );
                    setNumAttem(numAttem - 1);
                  }
                  if (numAttem - 1 === 0) {
                    setStrOutPut("Game Over");
                    setNumAttem(0);
                  }
                }
              }
            }}
          >
            Guess
          </button>
        </div>

        <button
          className="bg-red-500 py-2 px-5 tracking-wider rounded-md m-10"
          onClick={() => {
            setCheckValue(0);
            setStrOutPut("Start Guessing");
            setNumAttem(20);
            setCorrectAnsa(false);
            document.querySelector("input").value = "";
          }}
        >
          ReStart
        </button>

        <button
          className="bg-red-500 p-2 rounded-md "
          onClick={() => {
            setHighScore(0);
            localStorage.setItem("highScore", 0);
          }}
        >
          Reset Score
        </button>
      </div>
    </div>
  );
};

export default GuessDisplay;
