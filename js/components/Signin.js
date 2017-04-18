import React from 'react'
import { Link } from 'react-router-dom' // eslint-disable-line no-unused-vars

const Signin = React.createClass({
	render () {
		return (
			<div className = 'signin'>
				<header>
					<a href='/'><img src='public/img/1.png' /></a>
					<div>
						<Link to='/login'>Sign In</Link>
						<Link to='/register'>Sign Up</Link>
					</div>
				</header>
				<div>
					<input type = 'text' placeholder='Email' /><br/>
					<input type = 'text' placeholder='Password' /><br/>
					<input type = 'checkbox'/><label>remember me</label><br/>
					<Link to='/dashboard' ><button className='orangebutton'>Log In</button></Link>
					<hr />
					<p>New to Finnest?</p>
					<Link to='/register'><button>Sign Up</button></Link>
				</div>
			</div>
		)
	}
})

export default Signin