import React from 'react'
import { Link } from 'react-router-dom' // eslint-disable-line no-unused-vars

const Register = React.createClass({
	render () {
		return (
			<div className = 'register'>
				<header>
					<a href='/'><img src='public/img/1.png' /></a>
					<div>
						<Link to='/login'>Sign In</Link>
						<Link to='/register'>Sign Up</Link>
					</div>
				</header>
				<div>
					<input type = 'email' placeholder='Email' required/><br/>
					<input type = 'password' placeholder='Password' /><br/>
					<input type = 'password' placeholder='Confirm Password' /><br/>
					<input type = 'text' placeholder='First Name' /><br/>
					<input type = 'text' placeholder='Last Name' /><br/>
					<input type = 'text' placeholder='SSN' /><br/>
					<input type = 'text' placeholder='Address' /><br/>
					<input type = 'tel' placeholder='Phone Number' /><br/>
					<input type = 'text' placeholder='Some' /><br/>
					<input type = 'text' placeholder='Other' /><br/>
					<input type = 'text' placeholder='Inputs' /><br/>
					<input type = 'checkbox'/><label>I agree to Finnest's <a href='/termsofuse'>Terms of Use</a></label><br/>
					<hr />
					<Link to='/login'><button className='orangebutton'>Submit</button></Link>
				</div>
			</div>
		)
	}
})

export default Register