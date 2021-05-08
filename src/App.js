import React, { useState, createContext } from "react";
import EndScreen from "./components/EndScreen";
import Mianmenu from "./components/Mianmenu";
import Quize from "./components/Quize";

const QuizContext = createContext();

const App = () => {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0)

  return (
    <div className="app">
      <h1>Quize App</h1>
      <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
        {gameState === "menu" && <Mianmenu />}
        {gameState === "quiz" && <Quize />}
        {gameState === "end" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
};

export default App;
export { QuizContext };
