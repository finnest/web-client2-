import React from 'react'
import { Link } from 'react-router-dom' // eslint-disable-line no-unused-vars

const Home = React.createClass({
	render () {
		return (
			<div className = 'home'>
				<header>
					<a href='/'><img src='http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_auto/v1/1084130/logo_old-01_swv6a5-2_znwimx.png' /></a>
					<div>
						<Link to='/login'>Sign In</Link>
						<Link to='/register'>Sign Up</Link>
					</div>
				</header>
				<div className='homepage-text'>
					<h1>Learn Money. Start Saving.</h1>
					<h2>Sign up up become one of our early birds!</h2>
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
