import React from "react";
import { Link } from "react-router-dom";
import "../styles/gameover.css"

const GameOver = (props) => {
    return (
        <div>
            <div className="gameover-title-container">
                <h1 className="gameover-title"> Game Over</h1>
            </div>
            <div className="gameover-cause-container">
                <h1 className="gameover-cause">{props.whyLose} </h1>
               </div>
               <div className="gameover-correct-container">
                     <h1 className="gameover-correct"> The Correct answer was:<span className="gameover-answer"> {props.correctAnswer}</span> </h1>
              </div>
              <div className="gameover-reset-container">
                    <Link className="gameover-reset" to="/">Restart the Game</Link>
              </div>
        </div>
    )
}

export default GameOver;