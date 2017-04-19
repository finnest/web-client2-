import React from 'react'
import { Link } from 'react-router-dom' // eslint-disable-line no-unused-vars
import Transaction from './Transaction' // eslint-disable-line no-unused-vars
import preload from '../../public/history.json'

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
				<div className='balance'>
					<div>Card Balance<br/>{ preload.cardbalance }</div>
					<div>Nest Size<br/>{ preload.nestsize }</div>
				</div>
				<div className='trackinglist'>
					<ul>
						<li>
						{preload.transactions.map((transaction) => {
							return (
								<Transaction transaction = {transaction} />
							)
						})}
						</li>
				</ul>
				</div>
			</div>
		)
	}
})

export default Tracking