import React from "react";
import  { Link } from "react-router-dom";   

import "../styles/welcome.css"

const Welcome = (props) => {
    return (
        <div className="container">
            <div className="title">
                <h1 className="h1-tittle">Welcome to Quiz Game!</h1><br />
            </div>
            <h2>Here you will face with 30 difrent questions and for each of them you just have 30 seconds time.
            </h2><br />
            <h2>Each Round has duble score in comperaing to the previous round</h2>
            <h2>If you could answer the all question you will win but,
            if you answer the question wrong or later than 30 seconds you will lose the game.
             whenever your are ready  <Link to ="/main">Start the Game</Link>
            </h2>

        </div>
    )
}
export default Welcome;