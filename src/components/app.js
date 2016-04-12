import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Nav from './common/nav/nav';

import '../statics/css/app.css';

@connect(state => ({
    loading: state.routerState.fetching 
}))
export default class App extends React.Component {
	static propTypes = {
        loading: PropTypes.bool,
        children: PropTypes.element
    }
	
	render() {
		var {children, loading} = this.props;
		return (
			<div className="wrap">
				<Nav />
				{loading ? '加载中...' : children}
			</div>
		);
	}
}
