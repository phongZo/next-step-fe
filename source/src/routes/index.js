import PageNotAllowed from '@components/common/page/PageNotAllowed';
import PageNotFound from '@components/common/page/PageNotFound';
import LandingPageContainer from '@modules/containers/landing';
import LoginPageContainer from '@modules/containers/login';
import ProfilePageContainer from '@modules/containers/profile';
import RegisterContainer from '@modules/containers/register/register';
import PublicLayout from '@modules/layout/common/PublicLayout';

/*
	auth
		+ null: access login and not login
		+ true: access login only
		+ false: access not login only
*/
const routes = {
    pageNotAllowed: {
        path: '/not-allowed',
        component: PageNotAllowed,
        auth: null,
        title: 'Page not allowed',
    },
    homePage: {
        path: '/',
        component: LandingPageContainer,
        auth: null,
        title: 'Home',
    },
    loginPage: {
        path: '/login',
        component: LoginPageContainer,
        auth: false,
        title: 'Home',
    },
    registerPage: {
        path: '/register',
        component: RegisterContainer,
        auth: false,
        title: 'Home',
    },
    profilePage: {
        path: '/profile',
        component: ProfilePageContainer,
        auth: null,
        title: 'Profile',
        componentProps: {
            title: 'Hồ sơ',
        },
    },
    pageNotFound: {
        path: '/page-not-found',
        component: PageNotFound,
        auth: false,
        title: 'Page not found',
    },
    notFound: {
        component: PageNotFound,
        auth: null,
        title: 'Page not found',
        path: '*',
        layout: PublicLayout,
    },
};

export default routes;
