import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { accessRouteTypeEnum } from '@constants';

import routes from '.';

const ValidateAccess = ({ authRequire, component: Component, componentProps, isAuthenticated, title }) => {
    const location = useLocation();
    const getRedirect = (authRequire) => {
        if (authRequire === accessRouteTypeEnum.NOT_LOGIN && isAuthenticated) {
            return routes.homePage.path;
        }

        if (authRequire === accessRouteTypeEnum.REQUIRE_LOGIN && !isAuthenticated) {
            return routes.loginPage.path;
        }

        // check permistion

        return false;
    };

    const redirect = getRedirect(authRequire);

    if (redirect) {
        return <Navigate state={{ from: location }} key={redirect} to={redirect} replace />;
    }

    return (
        <Component {...(componentProps || {})}>
            <Outlet />
        </Component>
    );
};

export default ValidateAccess;
