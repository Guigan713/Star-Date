import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login';
import MatchCard from './components/MatchCard'
import MessageCard from './components/MessageCard'
import Navbar from './components/Navbar/Navbar'
import Swipe from './components/Swipe/Swipe';

import './App.css';

function App() {
	return (
		<div className = "App">
			<Router>
			<Switch>
				<Route exact path = "/">
					<Login />
				</Route>
				<Route path = "/swipe">
					<Swipe />
				</Route>
				{/* <Route path = "/matches">
				<MatchList />
					</Route> */}
				<Route path = "/matches/:id">
					<MatchCard />
				</Route>
				{/* <Route path = "/messages">
					<MessageList />
				</Route> */}
				<Route path = "/messages/:match">
					<MessageCard />
				</Route> 
			</Switch>
			<Navbar />
		</Router>
		</div>
	);
}

export default App;
