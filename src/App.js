import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Swipe from './components/Swipe';
import Navbar from './components/Navbar/Navbar'
import MatchCard from './components/MatchCard'


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/swipe">
          <Swipe />
        </Route>
        {/* <Route path="/matches">
          <MatchList />
        </Route> */}
        <Route path="/matches/:id">
          <MatchCard />
        </Route> 
        {/* <Route path="/messages">
          <MessageList />
        </Route> */}
        {/* <Route path="/messages/:match">
          <MessageCard />
        </Route> */}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
