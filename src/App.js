import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Inicio from "./components/inicio/Inicio";
import Footer from "./components/footer/footer";
import BotsContainer from "./components/bots/BotsContainer";

const App = () => {
	return (
		<Fragment>
			<Header />

			<Router>
				<Switch>
					<Route exact path='/' component={Inicio} />
					<Route exact path='/bots' component={BotsContainer} />
				</Switch>
			</Router>

			<Footer />
		</Fragment>
	);
};

export default App;
