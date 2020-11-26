import { lazy, ReactNode } from 'react';

// Main
const MainPage = lazy(() => import('../pages/main'));

// Profile
const ProfilePage = lazy(() => import('../pages/profile'));

export interface IRouteItem {
	path: string | string[];
	name: string;
	component: ReactNode;
	exact?: boolean;
}


const router: IRouteItem[] = [
	{
		path: ['/', '/popup.html'],
		name: 'main',
		component: MainPage,
		exact: true,
	},
	{
		path: '/profile',
		name: 'profile',
		component: ProfilePage,
		exact: true,
	}
];

export default router;
