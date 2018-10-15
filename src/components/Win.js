import React from "react";
import  { Link } from "react-router-dom";

const Win = (props) => {
    return (
        <div>
            <h1>Congratulation you Win the Quiz</h1>
            <h2>your score:{props.yourScore}</h2>
            <Link to="/">Restart the Game</Link>
            
        
        </div>
    )
}

export default Win;