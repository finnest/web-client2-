import React from 'react'
import { Link } from 'react-router-dom' // eslint-disable-line no-unused-vars

const Tracking = React.createClass({
	render () {
		return (
			<div className = 'tracking'>
				<header>
					<a href='/'><img src='public/img/1.png' /></a>
					<div>
						<Link to='/dashboard'>My Account</Link>
					</div>
				</header>
				<div>
					<br/>
					<br/>
					<br/>
					<br/>
					<h1>To Be Implemented</h1>
				</div>
			</div>
		)
	}
})

export default Tracking