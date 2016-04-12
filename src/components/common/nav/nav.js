import React from 'react';
import NavLink from './navLink';

export default class Nav extends React.Component {
	render() {
		return (
			<ul>
				<li><NavLink to="/about">About</NavLink></li>
				<li><NavLink to="/repos">Repos</NavLink></li>
			</ul>
		);
	}
}
