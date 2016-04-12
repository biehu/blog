import {combineReducers} from 'redux';

import articleState from './articleState';

import routerState from './routerState';
import authState from './authState';

export default combineReducers({
	articleState,
	routerState,
	authState
});
