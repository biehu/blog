import 'babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Router  from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {Provider} from 'react-redux';
import routes from './routes/routes';
import {configStore} from './utils/configStore';
import styles from './statics/css/app.css';

const store = configStore();
const history = createBrowserHistory();

ReactDOM.render(	
    <Provider store={store}>
        <Router history={history} routes={routes(store)} />
    </Provider>,
    document.getElementById('root')
);