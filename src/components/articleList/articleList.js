import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

@connect(state => ({
	articles: state.articleState.list
}))
export default class ArticleList extends React.Component {
	static propTypes = {
		articles: PropTypes.array
	}
	
	render() {
		var articles = this.props.articles.map((article, articleIndex) => (
			<div key={article.id}>
				<Link to={`/article?articleId=${article.id}`}>
					<h2 className="article_title">
						{article.title}
					</h2>
				</Link>
			</div>
		));
		return (
			<div className="article_list">
				{articles}
			</div>
		);
	}
}

