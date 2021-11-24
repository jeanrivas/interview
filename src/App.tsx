import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import api from './api/accounts';
import Home from './pages/home/Home';
import Accounts from './pages/accounts/Accounts';
import Navbar from './components/Navbar';
// import Loader from './components/Loader';
import DetailAccount from './pages/accounts/DetailAccount';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/accounts" exact>
					<Accounts />
				</Route>
				<Route path="/detail" exact>
					<DetailAccount />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
