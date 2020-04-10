import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Home from './Home/Home';
import About from './About/About';

export default function Main() {
	return (
		<div className="main">
			<Container maxWidth="xl">
				<Switch>
					<Route exact path="/" component={() => <Home />} />
					<Route path="/about" component={() => <About />} />
				</Switch>
			</Container>
		</div>
	);
}
