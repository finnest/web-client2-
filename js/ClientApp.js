import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router' // eslint-disable-line no-unused-vars
import Home from './Home'
import Register from './Register'
import Signin from './Signin'
import Dashboard from './Dashboard'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({ // eslint-disable-line no-unused-vars
	render () {
		return (
			<BrowserRouter>
				<div className = 'app'>
					<Match exactly pattern='/' component={Home} />
					<Match exactly pattern='/login' component={Signin} />
					<Match exactly pattern='/register' component={Register} />
					<Match exactly pattern='/dashboard' component={Dashboard} />
				</div>
			</BrowserRouter>
		)
	}
})

render(<App />, document.getElementById('app'))
