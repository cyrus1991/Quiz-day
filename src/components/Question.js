import React from "react";
import "../styles/styleQuestion.css";

export default class Question extends React.Component {
    state = {
        isVidible: false
    }

    render() {

        return (
            <div className="container" >
                <h1 className="questions">
                    {this.props.rounds} {this.props.question}</h1>
                <h3> Title: {this.props.title}</h3>
                <h2>level: {this.props.rounds}</h2>
                <h1>Time: {this.props.time}</h1>
                <h1>Highest score: {this.props.highestScore}</h1>
                <h1>{this.props.win}</h1>
                <form onSubmit={this.props.yourAnswer} >

                    <textarea className="textarea" name="theAnswer" onChange={(e) => this.setState({
                        isVidible: e.target.value !== ""
                    })} >

                    </textarea>

                    <h2>the score of this level: {this.props.score} </h2> <br />
                    <h3> your score : {this.props.yourScore}</h3>
                  
                    {this.state.isVidible ? <button
                    
                        onClick={this.props.getQuestion}>
                        Submit the answer
                                </button> : null}



                </form>


            </div>




        )
    }
}


