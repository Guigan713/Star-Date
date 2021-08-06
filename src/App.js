import React , { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login/Login';
import MatchCard from './components/MatchCard'
import MatchList from './components/MatchList/MatchList'
import MessageCard from './components/MessageCard'
import MessageList from './components/MessageList'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile';
import Swipe from './components/Swipe/Swipe';

import './App.css';

function App() {

const [login, setLogin] = useState(false)

const letMeIn = () => {
	console.log("let me in", login)
	setLogin(true)
}

	return (
		<div className = "App">
			<Router>
				{/* {login && <Navbar />}
				{!login && <Login />} */}
				<Navbar />
				<Switch>
					<Route exact path = "/">
						<Login />
						{!login &&
							<Link to='/swipe'>
								<div className = "loginBtnDiv">
									<div id="buttonLogin" onClick={letMeIn}>connexion</div>
								</div>
							</Link>
						}
					</Route>
					<Route path = "/profile">
						<Profile />
					</Route>
					<Route path = "/swipe">
						<Swipe />
					</Route>
					<Route path = "/matches/:id">
						<MatchCard />
					</Route>
					<Route path = "/matches">
						<MatchList />
					</Route>
					<Route path = "/messages/:match">
						<MessageCard />
					</Route> 
					<Route path = "/messages">
						<MessageList />
					</Route> 
				</Switch>
			</Router>
		</div>
	);
}

export default App;
