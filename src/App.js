import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import About from './components/About';
import Courses from './components/Courses';
import Quiz from './components/quiz';

import './App.css';

function App() {
	return (
		<React.Fragment>
			<Nav />

			<Switch>
				<Route path="/" exact component={About} />
				<Route path="/courses" component={Courses} />
				<Route path="/quiz/:id" component={Quiz} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
