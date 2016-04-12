import React from 'react';
import {fetchNewComponent} from '../states/routerState';
import {getItem} from '../states/articleState';

const Route = {
    path: 'article',
    getComponent(location, cb) {
        var dispatch = this.store.dispatch;
        dispatch(fetchNewComponent(true));
		
		var fillStore = () => {
			return dispatch(getItem(location.query.articleId));
		}

        function fetchComponent() {
            return new Promise(resolve => {
                require.ensure([], require => {
                    cb(null, require('../components/article/article'));
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
