import React, {PropTypes} from 'react';

export default class Login extends React.Component {
	static propTypes = {
		handleLogin: PropTypes.func.isRequired
	}
	
	static contextTypes = {
		router: React.PropTypes.object
	}
	
	state = {
		email: '',
		password: ''
	}
	
	handleChange = field => e => {
		e.preventDefault();
		this.setState({
			[field]: e.target.value
		});	
	}
	
	handleLogin = e => {
		e.preventDefault();
		var {email, password} = this.state;
		this.props.handleLogin(email, password); 
	}
	
	render() {
		var {email, password} = this.state;
		
		return (
			<div className="login">
				<div className="title">Login</div>
				<form onSubmit={this.handleLogin}>
					<label htmlFor="email">E-mail</label>
					<input 
						className="input"
						value={email}
						onChange={this.handleChange('email')}
						id="email"
						type="email"
						placehloder="Email"
						required 
					/>
						
					<label htmlFor="password">Password</label>
					<input 
						className="input"
						value={password}
						onChange={this.handleChange('password')}
						id="password"
						type="password"
						placeholder="Password"
						required
					/>
					
					<button className="btn" type="submit">
						Login
					</button>
				</form>
			</div>
		);
	}
}
