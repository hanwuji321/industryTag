import React, { Component } from 'react';
import {HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import '../node_modules/antd/dist/antd.min.css';
import familyStatus from './component/familyStatus/index';
import financialHabits from './component/financialHabits/index';
import internetHabits from './component/internetHabits/index';
import privateCar from './component/privateCar/index';
import Page from './component/privateCar/index';
import echo from './component/echo/index';
class App extends Component {
  render() {
    return (
      <div className="App">
          <main>
            <Switch>
              <Route exact path='/familyStatus' component={familyStatus}/>
              <Route path='/financialHabits' component={financialHabits}/>
              <Route path='/internetHabits' component={internetHabits}/>
              <Route path='/privateCar' component={privateCar}/>
              <Route path='/echo' component={echo}/>
            </Switch>
          </main>
      </div>
    );
  }
}

export default App;
