import React from 'react'
import { Link } from 'react-router-dom' // eslint-disable-line no-unused-vars

const Transfer = React.createClass({
	render () {
		return (
			<div className = 'transfer'>
				<header>
					<a href='/'><img src='public/img/1.png' /></a>
					<div>
						<Link to='/dashboard'>My Account</Link>
						<Link to='/' id="logout">Log out</Link>
					</div>
				</header>
				<div>
					<br/>
					<br/>
					<br/>
					<br/>
					<h1>Select the receiver...</h1>
					<hr width="70%" />
					<div>
						<div className='kidsimgs'>
							<input type="image" src="../../public/img/girl.jpg" id="girlimg"/>
							<input type="image" src="../../public/img/boy.jpg" id="boyimg"/>
						</div>
						<form>
							<input type = "number" placeholder="$0.00" />
						</form>
						<button className='orangebutton'>Continue</button>
					</div>
				</div>
			</div>
		)
	}
})

export default Transfer