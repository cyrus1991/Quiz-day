import React from "react";

import "../styles/style.css"

export default class Question extends React.Component {
    state = {
        isVidible: false
    }
    render() {
        return (
            <div className="container" >
                <div className="questions">
                    <h1>
                        {this.props.rounds} {this.props.question}
                    </h1>
                </div>
                <h2 className="title"> Title: {this.props.title}</h2>

                <div className="time-container" >
                    <div className="number"> {this.props.time} </div>
                </div>

                <h2 className="level">level: {this.props.rounds}</h2>
                <h2 className="level-score">The score of this level: {this.props.score} </h2>

                <h1>{this.props.win}</h1>
                <form onSubmit={this.props.yourAnswer} >

                    <h2 className="your-score"> your score : {this.props.yourScore}</h2>
                    <h3 className="highest-score">Your Highest Score: {this.props.userHighScore}</h3>
                    <div className="textarea-container">
                        <textarea className="textarea" name="theAnswer"
                             onChange={(e) => this.setState({
                            isVidible: e.target.value !== ""
                             })} 
                        >
                        </textarea>
                    </div>

                    {this.state.isVidible ? <div className="button-container"> <button
                        className="submit-btn"
                        onClick={this.props.getQuestion} >
                        Submit the answer
                                </button> </div> : null}
                </form>
            </div>
        )
    }
}


