import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router' // eslint-disable-line no-unused-vars
import Home from './components/Home'
import Register from './components/Register'
import Signin from './components/Signin'
import Dashboard from './components/Dashboard'
import RegisterChild from './components/RegisterChild'
import Transfer from './components/Transfer'
import TermOfUse from './components/TermOfUse'
import Tracking from './components/Tracking'
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
					<Match exactly pattern='/register-child' component={RegisterChild} />
					<Match exactly pattern='/termsofuse' component={TermOfUse} />
					<Match exactly pattern='/transfer' component={Transfer} />
					<Match exactly pattern='/history' component={Tracking} />
				</div>
			</BrowserRouter>
		)
	}
})

render(<App />, document.getElementById('app'))
