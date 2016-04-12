import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
const reducer = require('../states/states');

export function configStore(initialState) {
    const middleware = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middleware.push(createLogger({
            collapsed: true
        }));
    }

    const reduxMiddleware = applyMiddleware(...middleware);
    const createStoreWithMiddleware = reduxMiddleware(createStore);
    const store = createStoreWithMiddleware(reducer, initialState);

    if (module.hot) {
		module.hot.accept('../states/states', () => {
	      const nextReducer = require('../states/states');
	      store.replaceReducer(nextReducer);
	    });
    }

    return store;
}
