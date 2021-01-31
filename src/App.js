import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";



class App extends React.PureComponent {
	render() {
		return (
			<>
				<Router>
				<div className="navigation">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
			</div>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/about">
							<About />
						</Route>
					</Switch>
				</Router>
			</>
		)
	}
}

export default App;
