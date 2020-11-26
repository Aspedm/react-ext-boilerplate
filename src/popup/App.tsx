import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import routes from './router';
import '../assets/styles/main.scss';
import i18n from '../helpers/i18n';

const App: React.FC = () => {
	return (
		<div className="App">
			<ul className="App__menu">
				<li className="menuItem">
					<Link to="/">{i18n('mainPageLink')}</Link>
				</li>

				<li className="menuItem">
					<Link to="/profile">{i18n('profilePageLink')}</Link>
				</li>
			</ul>

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
