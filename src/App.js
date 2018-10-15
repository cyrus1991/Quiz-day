import React, { Component } from 'react';

import Question from "./components/Question";
import GameOver from "./components/GameOver"
import Welcome from "./components/Welcome"


class App extends Component {

  state = {
    question: "",
    title: "",
    answer: "",
    score: 1,
    yourScore: 0,
    highestScore: null,
    points: NaN,
    time: 0,
    rounds: 0,
    wrongAnswer: "",
    buttom: "Start the Game",
    wrong: false,
    whyLose: "",
    welcome: false,
    startGame:true,
    timeIsOver:false
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
    if (this.state.rounds < 3) {
      this.setState({
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
        score:undefined,
        time:undefined,
        points:undefined,
        win: "Congratulation You Won The Game"
      })
    }
  }



  componentDidMount() {
    this.myInterval = setInterval(() => {
      if (this.state.time > 0) {
        this.setState({
         
          time: this.state.time - 1
        })
      } else if (this.state.time === 0 ) {
        this.setState({
          wrong: true,
          welcome : this.state.welcome,
          whyLose: `Your Time is Over.\n The Answer is: ${this.state.answer}`
        })
      }
    }, 1000)
    this.getQuestion();
  }
  // componentWillUnmount () {
  //   this.clearInterval(this.myInterval);
  //   this.getQuestion()
  //   }
  
  toggleHanddles = (e) => {
    e.preventDefault();
    this.setState({
      wrong: false,
     welcome : !this.state.welcome,
     startGame : !this.state.startGame
    })
  }


  yourAnswer = e => {
    e.preventDefault();
    
    const theAnswer = e.target.elements.theAnswer.value;
    if (theAnswer === "") {
      console.log("you should put the answer!")
      alert(" You should write your answer!")
    }
    else if (theAnswer.toLowerCase() !== this.state.answer.toLowerCase()) {
      console.log("wrong")
      this.setState({
        rounds: null,
        wrong:true,
        whyLose: `Your Answer was Wrong.\n The Correct Answer is: ${this.state.answer}`
      })
    } else if (theAnswer.toLowerCase() === this.state.answer.toLowerCase()) {
      const points = this.state.rounds
      console.log(points)
      console.log("correct")
      this.setState({
        score: Math.pow(2, points),
        yourScore: this.state.yourScore += this.state.score
      });
    }
   
    //this reset Function should be at the bottom of the props
    //because first the conditions are checked and after the reset function runs
    e.currentTarget.reset()
  }
  render() {
    if(this.state.win ===  "Congratulation You Won The Game") {
      return (
        <Welcome 
        toggleHanddles={this.toggleHanddles}/>
      )
    }
    
    if ( !this.state.wrong && !this.state.welcome) {
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
          />
        </div>
      );
    } 
    if (this.state.wrong) {
      return (
        <div>
          <GameOver
            whyLose={this.state.whyLose}
            reset={this.reset}
          > </GameOver>
        </div>
      )
    }
  }
}

export default App;
