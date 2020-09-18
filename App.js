import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './Components/SignIn';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SignIn} />
          {/* <Route path='/Something' component={Something} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;