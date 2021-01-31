import React from 'react';
import "./Navigation.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Navigation() {
	return (
		<Router>
			<div className="navigation">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
			</div>
		</Router>
	)
}

export default Navigation;