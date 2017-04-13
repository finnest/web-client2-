import React from 'react'
import { Link } from 'react-router' // eslint-disable-line no-unused-vars

const Home = React.createClass({
	render () {
		return (
			<div className = 'home'>
				<header>
					<a href='/'><img src='public/img/1.png' /></a>
					<div>
						<Link to='/login'>Sign In</Link>
						<Link to='/register'>Sign Up</Link>
					</div>
				</header>
				<div>
					<h1>Learn Money. Start Saving.</h1>
					<h2>Sign up tp become one of our early birds!</h2>
					<div>
						<Link to='/login'><button className='orangebutton'>Sign In</button></Link><br/>
						<Link to='/register'><button>Sign Up</button></Link>
					</div>
				</div>
			</div>
		)
	}
})

export default Home
