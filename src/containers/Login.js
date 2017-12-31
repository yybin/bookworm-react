import React from 'react';
import { connect } from 'react-redux'

import LoginForm from '../components/Forms/LoginForm'
import { login } from '../actions/login'

class Login extends React.Component{
	submit = (data) => this.props.login(data).then(()=> this.props.history.push("/"));
	
	render(){
		return (
			<div>
				<h1>Login</h1>
				<LoginForm submit={this.submit}/>
			</div>
		)
	}
}
	

export default connect(null,{login})(Login);