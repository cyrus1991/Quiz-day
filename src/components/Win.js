import React from "react";

const Win = (props) => {
    return (
        <div>
            <h1>Congratulation you Win the Quiz</h1>
            <h2>your score:{props.yourScore}</h2>
            <button onClick={props.reset} ><a href="./question" >Restart the Game </a>  </button>
        
        </div>
    )
}

export default Win;