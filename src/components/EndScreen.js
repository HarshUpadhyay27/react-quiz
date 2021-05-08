import React, {useContext} from 'react'
import {QuizContext} from '../App'
import {Question} from './QuestionBank'

const EndScreen = () => {
    const {score, setScore, setGameState} = useContext(QuizContext)

    const restartQuiz = ()=>{
        setGameState("menu")
        setScore(0)
    }
    return (
        <div className="menu">
            <h2>Quize Finish</h2>
            <h3>{score}/{Question.length}</h3>
            <button onClick={restartQuiz}>Restart Quize</button>
        </div>
    )
}

export default EndScreen
