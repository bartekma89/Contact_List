import React from 'react';
import Contacts from './container/ContactsContainer';
import Details from './container/DetailsContainer.js';
import NotFound from './presentation/pageNotFound/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={Contacts} />
					<Route path="/details/:userId" component={Details} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
