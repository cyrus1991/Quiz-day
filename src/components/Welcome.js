import React from "react";

const Welcome = (props) => {
    return (
        <div>
            <h1>Welcome to Quiz Game!</h1><br/>
            <h2>Here you will face with 30 difrent questions and for each of them you just have 30 seconds time.
            </h2><br/>
            <h2>Each Round has duble score in comperaing to the previous round</h2>
            <h2>If you could answer the all question you will win but, 
            if you answer the question wrong or later than 30 seconds you will lose the game. 
             whenever your are ready <button onClick={props.toggleHanddles}><a href="./question" >Here</a></button>
            </h2>

        </div>
    )
}
export default Welcome;