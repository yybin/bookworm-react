import React from 'react';
import LoginForm from '../components/Forms/LoginForm'


class Login extends React.Component{
	submit = (data) => {
		console.log(data);
	}
	render(){
		return (
			<div>
				<h1>Login</h1>
				<LoginForm submit={this.submit}/>
			</div>
		)
	}
}
	

export default Login;