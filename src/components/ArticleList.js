import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Pagination from './Common/Pagination/Pagination';

@connect(state => ({
	articles: state.articleState.list,
	articlesMax: state.articleState.max,
	articlesCurrent: state.articleState.current
}))
export default class ArticleList extends React.Component {
	static propTypes = {
		articles: PropTypes.array,
		articlesMax: PropTypes.number,
		articlesCurrent: PropTypes.number
	}
	
	changePage() {
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
				<Pagination
					max={3}
					current={1}
					onChangePage={this.changePage}
				/>
			</div>
		);
	}
}

