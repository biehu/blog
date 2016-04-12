import React from 'react';
import {fetchNewComponent} from '../states/routerState';
import {getList} from '../states/articleState';

const Route = {
    path: 'articleList',
    getComponent(location, cb) {
        var dispatch = this.store.dispatch;
        dispatch(fetchNewComponent(true));
		
		function fillStore() {
			return dispatch(getList());
		}

        function fetchComponent() {
            return new Promise(resolve => {
                require.ensure([], require => {
                    cb(null, require('../components/articleList/articleList'));
                    resolve();
                });
            });
        }

        Promise.all([
			fillStore(),
            fetchComponent()
        ]).then(
            () => dispatch(fetchNewComponent(false))
        );
    }
};

export default Route;
