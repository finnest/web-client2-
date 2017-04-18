import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom' // eslint-disable-line no-unused-vars
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
					<Route exact={true} path='/' component={Home} />
					<Route exact={true} path='/login' component={Signin} />
					<Route exact={true} path='/register' component={Register} />
					<Route exact={true} path='/dashboard' component={Dashboard} />
					<Route exact={true} path='/register-child' component={RegisterChild} />
					<Route exact={true} path='/termsofuse' component={TermOfUse} />
					<Route exact={true} path='/transfer' component={Transfer} />
					<Route exact={true} path='/history' component={Tracking} />
				</div>
			</BrowserRouter>
		)
	}
})

render(<App />, document.getElementById('app'))
