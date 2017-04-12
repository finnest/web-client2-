import React from 'react'
import { Link } from 'react-router' // eslint-disable-line no-unused-vars

const RegisterChild = React.createClass({
	render () {
		return (
			<div className = 'register-child'>
				<header>
					<a href='/'><img src='public/img/1.png' /></a>
					<div>
						<Link to='/dashboard'>My Account</Link>
					</div>
				</header>
				<div>
					<input type = 'text' placeholder='First Name' required/><br/>
					<input type = 'text' placeholder='Last Name' /><br/>
					<input type = 'text' placeholder='Birthday' /><br/>
					<input type = 'text' placeholder='Mail Address' /><br/>
					<input type = 'text' placeholder='Phone Number' /><br/>
					<input type = 'checkbox'/><label>I agree to Finnest's <a href='/termsofuse'>Terms of Use</a></label><br/>
					<hr />
					<Link to='/register'><button className='orangebutton'>Register My Kid</button></Link>
				</div>
			</div>
		)
	}
})

export default RegisterChild