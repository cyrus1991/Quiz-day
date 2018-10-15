import React from "react";

import Question from "./Question";
import GameOver from "./GameOver";
import Win from "./Win";


export default class Main extends React.Component {
    state = {
        userHighScore:0,
        question: "",
        title: "",
        answer: "",
        score: 1,
        yourScore: 0,
        points: NaN,
        time: 0,
        rounds: 0,
        buttom: "Start the Game",
        wrong: "",
        whyLose: "",
        welcome: true,
        timeIsOver: false,
        start: "",
        yourAnswer: undefined,
        timesUp: false,
        wrongAnswer: false,
        win: undefined
    }
    // this is the newest method of fetching data (request) which is provided by
    //ES7 that makes the request so much easier.
    getQuestion = async () => {
        const api_call = await fetch('http://jservice.io/api/random');
        // we have to convert the respond to json format.
        const array_data = await api_call.json();
        // just try to bring the object out of the array.
        const data = array_data[0];

        console.log(data.question)
        console.log(data.category.title)
        console.log(data.answer)
        if (this.state.rounds < 30) {
            this.setState({
                win: false,
                question: data.question,
                title: data.category.title,
                answer: data.answer,
                rounds: this.state.rounds + 1,
                time: 30
            })
        } else {
            this.setState({
                question: undefined,
                title: undefined,
                answer: undefined,
                rounds: undefined,
                score: undefined,
                time: undefined,
                points: undefined,
                win: true
            })
        }
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            if (this.state.time > 0) {
                this.setState({
                    timesUp: false,
                    time: this.state.time - 1
                })
            } else if (this.state.time === 0) {
                this.setState({
                    timesUp: true,
                    win: false,
                    welcome: false,
                    whyLose: `Your Time is Over.\n The Answer is: ${this.state.answer}`
                })
            }
        }, 1000)
        this.getQuestion();
    }

    // componentWillUnmount() {
    //     this.clearInterval(this.myInterval);
       
    // }

    yourAnswer = e => {
        e.preventDefault();

        const theAnswer = e.target.elements.theAnswer.value;
      
        if (theAnswer === "") {
            console.log("you should put the answer!")
            prompt(" You should write your answer!")
            this.setState({
                question: this.state.question,
                title: this.state.title,
                answer: this.state.answer,
                rounds:this.state.rounds
            })
        }
          
        else if (theAnswer.toLowerCase() !== this.state.answer.toLowerCase()) {
            console.log("wrong")
            this.setState({
                isHidden:false,
                wrongAnswer: true,
                win: false,
                welcome: false,
                wrong: "your answer was wrong",
                whyLose: `Your Answer was Wrong.\n The Correct Answer is: ${this.state.answer}`
            })
        } else if (theAnswer.toLowerCase() === this.state.answer.toLowerCase()) {
            const points = this.state.rounds
            console.log(points)
            console.log("correct")
           
            this.setState({
                isHidden:false,
                wrongAnswer: false,
                win: false,
                welcome: false,
                timesUp: false,
                score: Math.pow(2, points),
                userHighScore: Math.pow(2,(points-1)),
                yourScore: this.state.yourScore += this.state.score,
            });
           

        }
        //this reset Function should be at the bottom of the props
        //because first the conditions are checked and after the reset function runs
        e.currentTarget.reset()
    }

    



    render() {
        if (this.state.win === true) {
            return (
                <Win
                    yourScore={this.state.yourScore}
                />
            )
        }

        if (this.state.yourAnswer === undefined && this.state.wrongAnswer === false && this.state.timesUp === false) {
            //   
            // && this.state.win=== false) {
            return (
                <div>
                    <Question
                        getQuestion={this.getQuestion}
                        question={this.state.question}
                        title={this.state.title}
                        rounds={this.state.rounds}
                        win={this.state.win}
                        answer={this.state.answer}
                        yourAnswer={this.yourAnswer}
                        score={this.state.score}
                        yourScore={this.state.yourScore}
                        time={this.state.time}
                        onChange={this.onChange}
                        userHighScore={this.state.userHighScore} 
                        isHidden={this.state.isHidden}
                        theAnswe={this.theAnswe}
                    />
                </div>
            );
        }

        if (this.state.timesUp === true || this.state.wrongAnswer === true) {
            return (
                <div>
                    <GameOver
                        whyLose={this.state.whyLose}
                    /> 
                </div>
            )
        }
    }
}