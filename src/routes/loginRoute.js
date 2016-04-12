import React from 'react';
import {fetchNewComponent} from '../states/routerState';

const Route = {
    path: 'login',
    getComponent(location, cb) {
        var dispatch = this.store.dispatch;
        dispatch(fetchNewComponent(true));
		
        function fetchComponent() {
            return new Promise(resolve => {
                require.ensure([], require => {
                    cb(null, require('../components/auth/login'));
                    resolve();
                });
            });
        }

        Promise.all([
            fetchComponent()
        ]).then(
            () => dispatch(fetchNewComponent(false))
        );
    }
};

export default Route;
