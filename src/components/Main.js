import React from "react";

import Question from "./Question";
import GameOver from "./GameOver";
import Win from "./Win";
import Welcome from "./Welcome";


export default class Main extends React.Component {
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
        buttom: "Start the Game",
        wrong: "",
        whyLose: "",
        welcome: true,
        timeIsOver:false,
        start :"",
        yourAnswer:undefined,
        timesUp : false,
        wrongAnswer:false,
        win:undefined
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
        win:false,
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
        win:true
      })
    }
  }
  componentDidMount() {
    this.mounted=true;
    this.myInterval = setInterval(() => {
      if (this.state.time > 0) {
        this.setState({
          timesUp : false,
          time: this.state.time - 1
        })
      } else if (this.state.time === 0 ) {
        this.setState({
          timesUp : true,
          win:false,
          welcome: false,
          whyLose: `Your Time is Over.\n The Answer is: ${this.state.answer}`
        })
      }
    }, 1000)
    this.getQuestion();
  }

  componentWillUnmount () {

    this.clearInterval(this.myInterval);
    this.getQuestion()
    }
  
  toggleHanddles = (e) => {
    e.preventDefault();
    this.setState({
     start : "game is started"
     
    })
  }
    
  welcome  = (e) => {
    e.preventDefault();
    this.mounted=false;
    this.setState({
      welcome:false
    })
  }

  
    yourAnswer = e => {
      e.preventDefault();
      
      const theAnswer = e.target.elements.theAnswer.value;
      if (theAnswer === "") {
        console.log("you should put the answer!")
         prompt(" You should write your answer!")
        this.setState({
         question:this.state.question,
          title: this.state.title,
          answer: this.state.answer,
          rounds:this.state.rounds
        })
     
      }
      else if (theAnswer.toLowerCase() !== this.state.answer.toLowerCase()) {
        console.log("wrong")
        this.setState({
          wrongAnswer:true,
          win:false,
          welcome: false,
          answer : !this.state.answer,
          wrong: "your answer was wrong",
          whyLose: `Your Answer was Wrong.\n The Correct Answer is: ${this.state.answer}`
        })
      } else if (theAnswer.toLowerCase() === this.state.answer.toLowerCase()) {
        const points = this.state.rounds
        console.log(points)
        console.log("correct")
        this.setState({
          wrongAnswer:false,
          win:false,
          welcome: false,
          timesUp:false,
          score: Math.pow(2, points),
          yourScore: this.state.yourScore += this.state.score
        });
      }
      //this reset Function should be at the bottom of the props
      //because first the conditions are checked and after the reset function runs
      e.currentTarget.reset()
    }
    

    render() {
        if ( this.state.welcome === true ) {
            return(
              <Welcome 
                welcome={this.welcome}
              />
            )
          }
          if(this.state.win === true && this.state.welcome === false && this.state.yourAnswer=== undefined && this.state.timesUp=== false && this.state.wrongAnswer === false  ) {
            return (
              <Win
              reset={this.reset}
              yourScore={this.state.yourScore}
             />
            )
          }
          
         
          
            if(this.state.welcome === false && this.state.yourAnswer=== undefined && this.state.timesUp=== false && this.state.wrongAnswer === false && this.state.win=== false) {
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
                />
              </div>
            );
          }
      
            if ( this.state.wrongAnswer===true  || this.state.timesUp=== true &&  this.state.welcome === false && this.state.win=== false) {
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