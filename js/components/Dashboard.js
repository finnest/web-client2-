import React from 'react'
import { Link } from 'react-router-dom' // eslint-disable-line no-unused-vars

const Dashboard = React.createClass({
	render () {
		return (
			<div className = 'dashboard'>
				<header>
					<a href='/'><img src='public/img/1.png' /></a>
					<div>
						<Link to='/dashboard'>My Account</Link>
						<Link to='/' id="logout">Log out</Link>
					</div>
				</header>
				<div className = 'menu'>
					<div>
						<Link to='/register-child'>
							<img src='public/img/reg_kid.png' />
							<h4>Register a Child</h4>
						</Link>
					</div>
					<div>
						<Link to='/transfer'>
							<img src='public/img/transfer.png' />
							<h4>Make a Transfer</h4>
						</Link>
					</div>
					<div>
						<Link to='/history'>
							<img src='public/img/tracking.png' />
							<h4>Track Account History</h4>
						</Link>
					</div>
				</div>
			</div>
		)
	}
})

export default Dashboard