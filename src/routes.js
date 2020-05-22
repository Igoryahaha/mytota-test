import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './components/Login/Login';
import MainPage from './components/Products/ProductsContainer';
import NotFoundPage from './components/NotFound/NotFound';
import requireAuthentication from './service/requireAuthentication';

export function getRoutes() {
    return (
        <HashRouter>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={requireAuthentication(MainPage)}
                />
                <Route path="/login" component={LoginPage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </HashRouter>
    );
}

export default getRoutes;
