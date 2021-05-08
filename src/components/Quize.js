import React, { useState, useContext } from "react";
import { Question } from "../components/QuestionBank";
import {QuizContext} from '../App'

const Quize = () => {
    const {setGameState, score, setScore } = useContext(QuizContext)
    
  const [currQuestion, setCurrQuestion] = useState(0);
  const [option, setOption] = useState("");

  const nextQuestion = ()=>{
      setCurrQuestion(currQuestion+1)
      if(Question[currQuestion].answer === option){
          setScore(score+1)
      }
  }
  const finishQuiz = ()=>{
    if(Question[currQuestion].answer === option){
        setScore(score+1)
    }
    setGameState("end")
  }
  return (
    <div className="menu">
      <h2>{Question[currQuestion].question}</h2>
      <div className="option">
        <button onClick={()=>setOption("A")}>{Question[currQuestion].optionA}</button>
        <button onClick={()=>setOption("B")}>{Question[currQuestion].optionB}</button>
        <button onClick={()=>setOption("C")}>{Question[currQuestion].optionC}</button>
        <button onClick={()=>setOption("D")}>{Question[currQuestion].optionD}</button>
      </div>{
      }
      {currQuestion == Question.length-1 ? 
        <button onClick={finishQuiz}>Finish Quiz</button>:
      <button onClick={nextQuestion}>Next Question</button>
      }
    </div>
  );
};

export default Quize;
