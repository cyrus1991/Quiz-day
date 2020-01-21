import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./components/Main"
import Welcome from "./components/Welcome"
import Error from "./components/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/main" component={Main} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
