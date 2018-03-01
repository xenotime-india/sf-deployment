import React from 'react'
import { NavBar }  from '../../components/Navbar/NavBar'
import { Button } from 'react-lightning-design-system';
import { LoginBox } from './../../components/LoginBox/LoginBox';

export class Home extends React.Component {
	render() {
		return (
			<div>
			    <div className="columns">
			        <div className="column is-half is-offset-one-quarter">
			            <LoginBox/>
			        </div>
			    </div>
			</div>
		)
   	}
}