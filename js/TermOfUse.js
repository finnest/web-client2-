import React from 'react'
import { Link } from 'react-router' // eslint-disable-line no-unused-vars

const TermsOfUse = React.createClass({
	render () {
		return (
			<div className = 'termsofuse'>
				<header>
					<a href='/'><img src='public/img/1.png' /></a>
					<div>
						<Link to='/login'>Sign In</Link>
						<Link to='/register'>Sign Up</Link>
					</div>
				</header>
				<div>
				<br/>
				<br/>
				<br/>
				<br/>
					<h1>Term of Use</h1>
				</div>
			</div>
		)
	}
})

export default TermsOfUse