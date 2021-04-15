import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './router';
import '../assets/styles/main.scss';

const App: React.FC = () => {
	return (
		<div className="App">
			<div className="App__content">
				<Switch>
					{routes.map(route => {
						const RouteComponent: any = route.component;

						return (
							<Route
								key={route.name}
								path={route.path}
								exact={route.exact}
								render={() => <RouteComponent />}
							/>
						);
					})}
				</Switch>
			</div>
		</div>
	);
};

export default App;
