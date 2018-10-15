import React from "react";
import  { Link } from "react-router-dom";

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
              <Link to="/">Restart the Game</Link>
        </div>
    )
    }

export default GameOver;