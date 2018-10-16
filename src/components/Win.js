import React from "react";
import  { Link } from "react-router-dom";
import "../styles/win.css"

const Win = (props) => {
    return (
        
        <div className="win-container">
            <div className="win-title-container">
                <h1 className="win-title">Congratulation you Win the Quiz</h1>
            </div>
            <h2 className="total-score-title"> Your Total Score Is:<span className="total-score"> {props.yourScore}</span></h2>
            <div className="win-reset-container">
                    <Link className="win-reset" to="/">Restart the Game</Link>
              </div>
        </div>
    )
}

export default Win;