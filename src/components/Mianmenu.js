import React, {useContext} from 'react'
import { QuizContext} from '../App'

const Mianmenu = () => {
    const {gameState, setGameState} = useContext(QuizContext)
    return (
        <div className="menu">
            <button onClick={()=>setGameState("quiz")}>Start Quize</button>
        </div>
    )
}

export default Mianmenu
