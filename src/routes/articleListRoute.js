import React from 'react';
import {fetchNewComponent} from '../states/routerState';
import {getList} from '../states/articleState';

var route = {
    path: 'ArticleList',
    getComponent(location, cb) {
        var dispatch = this.store.dispatch;
        dispatch(fetchNewComponent(true));
		
		function fillStore() {
			return dispatch(getList());
		}

        function fetchComponent() {
            return new Promise(resolve => {
                require.ensure([], require => {
                    cb(null, require('../components/ArticleList'));
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

export default route;

