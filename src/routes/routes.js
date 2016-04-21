import React from 'react';
import {Route, Redirect} from 'react-router';
import {checkLogin} from '../states/authState';
import App from '../components/App';
import noFound from '../components/NoFound';
import articleList from './articleListRoute';
import article from './articleRoute';

const routes = (
	<Route component={App}>
		<Redirect from="/" to="/articleList" />
		<Route requireAuth>
			<Route {...articleList} />
			<Route {...article} />
		</Route>
		<Route {...noFound} />
	</Route>
);

function walk(routes, cb) {
    cb(routes);
    if (routes.childRoutes) {
        routes.childRoutes.forEach(route => walk(route, cb));
    }
    return routes;
}

export default (store) => {
    return walk(Route.createRouteFromReactElement(routes), route => {
        var oldOnEnter = route.onEnter || false;
        route.onEnter = (nextState, replaceState, goNext) => {
            if (route.requireAuth && !store.getState().authState.logged) {
                store.dispatch(checkLogin()).then(() => {
                    if (!store.getState().authState.logged) {
                        replaceState({nextPathname: nextState.location.pathname}, '/login');
                    }
                    if (oldOnEnter) {
                        oldOnEnter(nextState, replaceState);
                    }
                    goNext();
                });
            } else {
                if (oldOnEnter) {
                    oldOnEnter(nextState, replaceState);
                }
                goNext();
            }
        };
        route.store = store;
    });
}
