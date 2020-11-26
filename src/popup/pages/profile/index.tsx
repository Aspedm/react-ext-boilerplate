import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import get from 'lodash/get';
import BaseLoader from '../../../components/baseLoader';
import { getUser, IUserData } from '../../../store/modules/user/actions';
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
		<>
			<h1>{i18n('profilePageTitle')}</h1>

			{userIsLoading && <BaseLoader />}
			{!userIsLoading && userData && (
				<ul>
					<li>{userData.login}</li>
					<li><img src={userData.avatar_url} alt="Avatar" /></li>
				</ul>
			)}
		</>
	);
};

export default ProfilePage;
