import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

@connect(state => ({
	post: state.articleState.items
}))
export default class Article extends React.Component {
	static propTypes = {
		post: PropTypes.object
	}
	
	render() {
		var post = this.props.post;
		if (!post) return null;
		
		var {title, userId, content} = post;
		
		return (
			<div className="article">
				<div className="title">{title}</div>
		        <p>{content}</p>
		        <small>written by {userId}</small>
			</div>
		);
	}
}
