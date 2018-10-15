import React from "react";
import "../styles/styleQuestion.css";

export default class Question extends React.Component {
 
    render() {

        return (
            <div className="container" >
                <h1 className="questions">
                    {this.props.rounds} {this.props.question}</h1>
                <h3> Title: {this.props.title}</h3> 
                <h2>level: {this.props.rounds}</h2>
                <h1>Time: {this.props.time}</h1>
                <h1>{this.props.win}</h1>
                <form onSubmit={this.props.yourAnswer} onChange={this.props.onChange} >

                    <textarea className="textarea" name="theAnswer" ref={this.answerRef} >
                        
                    </textarea>
                    <h2>the score of this level: {this.props.score} </h2> <br />
                    <h3> your score : {this.props.yourScore}</h3>
                    <button
                        className="answer-btn"
                        onClick={this.props.getQuestion}>
                        Start the Game
                        </button>
                </form>


            </div>




        )
    }
}


