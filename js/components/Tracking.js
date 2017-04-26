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
						<Link to='/' id="logout">Log out</Link>
					</div>
				</header>
				<div className="container">
					<div className="colomn-left">
						<div className="sidebar-compo">
							<h3>Name</h3>
							<p>balance</p>
							<br/>
							<p>1</p>
							<p id="balance-number"></p>
						</div>
					</div>
					<div className="colomn-right">
						<div className='balance'>
							<div>Card Balance<br/>{ preload.cardbalance }</div>
							<div>Nest Size<br/>{ preload.nestsize }</div>
						</div>
						<div className="filter">
							<select name="year">
								<option value="0">--year--</option>
								<option value="2017">2017</option>
								<option value="2016">2016</option>
								<option value="3">2015</option>
								<option value="4">2014</option>
							</select>
							<select name="month">
								<option value="0">--month--</option>
								<option value="1">January</option>
								<option value="2">February</option>
								<option value="3">March</option>
								<option value="4">April</option>
								<option value="5">May</option>
								<option value="6">June</option>
								<option value="7">July</option>
								<option value="8">August</option>
								<option value="9">September</option>
								<option value="10">October</option>
								<option value="11">November</option>
								<option value="12">December</option>
							</select>
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
				</div>
			</div>
		)
	}
})

export default Tracking