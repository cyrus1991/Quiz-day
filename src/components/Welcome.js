import React from "react";
import { Link } from "react-router-dom";

import "../styles/welcome.css"

const Welcome = (props) => {
    return (
        <div className="welcome-container">
            <div className="welcome-header">
                <h1 className="welcome-h1-header">Welcome to Quiz-Day!</h1>
            </div>
            <h1 className="welcome-rules">Rules</h1>
            <div className="welcome-rules-container">
                <ul>
                    <li> <h3>  There are 30 questions that you should answer </h3></li>
                    <li> <h3>   For each question, you just have 30 second </h3></li>
                    <li><h3>   The point of each round  doubles next to the previous round </h3></li>
                    <li><h3>  If answer a question wrong  you will lose the Game </h3></li>
                    <li>  <h3> If your time gets over you will lose the Game as well </h3></li>
                </ul>
                </div>
            <h2>
                whenever your are ready  <Link className="welcome-link" to="/main">Click Here</Link>
            </h2>

        </div>
    )
}
export default Welcome;