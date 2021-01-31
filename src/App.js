import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



class App extends React.PureComponent {
	render() {
		return (
			<>
				<Router basename={process.env.PUBLIC_URL}>
					<Navigation />
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
