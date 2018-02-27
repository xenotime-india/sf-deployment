import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import { Home } from '../Pages/Home/Home'
import { About } from '../Pages/About/About'
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute'

export class Routes extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path = '/' component = {Home} />
					<PrivateRoute path = '/about' component = {About} />
					<Route render = { () => {
						return <p>You're lost.  This is how new Router Switch is suppose to work!</p>
					}} />
				</Switch>
			</Router>
			)
	}
}	