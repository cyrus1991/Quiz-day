import React from "react";

const GameOver = (props) => {
    return (
        <div>
            <h1> Game Over</h1> <br />
            <h1>{props.whyLose.split('\n').map(function(item, key) {
                return (
                  <span key={key}>
                    {item}
                    <br/>
                  </span>
                )
              })} </h1>
              <button onClick={props.reset} ><a href="./question" >Restart the Game </a>  </button>
        </div>
    )
    }

export default GameOver;