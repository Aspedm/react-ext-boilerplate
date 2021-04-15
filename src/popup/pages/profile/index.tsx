import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import get from 'lodash/get';
import { Link } from 'react-router-dom';
import './profile.scss';

// Components
import BaseLoader from '../../../components/baseLoader';

// Actions
import { getUser, IUserData } from '../../../store/modules/user/actions';

// Helpers
import i18n from '../../../helpers/i18n';


const ProfilePage: React.FC = () => {
	const dispatch = useDispatch();

	const userIsLoading: boolean = useSelector(state => get(state, 'user.loading', false));
	const userData: IUserData | null = useSelector(state => get(state, 'user.data', null));

	useEffect(() => {
		dispatch(getUser({
			login: 'aspedm',
		}));
	}, []);

	return (
		<div className="exampleProfile">
			<div className="exampleProfile__message">
				{i18n('profile__message')}
			</div>

			<div className="exampleProfile__body">
				{userIsLoading && <BaseLoader />}
				{!userIsLoading && userData && (
					<div className="exampleUser">
						<div className="exampleUser__avatar"><img src={userData.avatar_url} alt="Avatar" /></div>
						<div className="exampleUser__name">{userData.login}</div>
					</div>
				)}
			</div>

			<div className="exampleProfile__actions">
				<Link to="/">{i18n('profile__back')}</Link>
			</div>
		</div>
	);
};

export default ProfilePage;
