import React from 'react';
import {fetchNewComponent} from '../states/routerState';
import {getItem} from '../states/articleState';

var route = {
    path: 'Article',
    getComponent(location, cb) {
        var dispatch = this.store.dispatch;
        dispatch(fetchNewComponent(true));
		
		var fillStore = () => {
			return dispatch(getItem(location.query.articleId));
		}

        function fetchComponent() {
            return new Promise(resolve => {
                require.ensure([], require => {
                    cb(null, require('../components/Article'));
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
