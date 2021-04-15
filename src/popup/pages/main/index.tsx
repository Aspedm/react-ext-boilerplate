import React from 'react';
import { Link } from 'react-router-dom';
import './main.scss';

// Graphics
import ReactLogo from '../../../assets/images/react-logo.svg';

// Helpers
import i18n from '../../../helpers/i18n';

const MainPage: React.FC = () => {
	return (
		<div className="examplePopup">
			<div className="examplePopup__logo">
				<img src={ReactLogo} alt="React extensions" />
			</div>

			<div className="examplePopup__message">
				{i18n('main__message_1')} <code>src/popup/pages/main/index.tsx</code> {i18n('main__message_2')}
			</div>

			<div className="examplePopup__actions">
				<Link to="/profile">{i18n('main__example_link')}</Link>
			</div>
		</div>
	);
};

export default MainPage;
