import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


export const PrivateRoute = ({component: ComposedComponent, ...rest}) => {

    class Authentication extends Component {

        // redirect if not authenticated; otherwise, return the component imputted into <PrivateRoute />
        handleRender(props) {
            if (!this.props.authenticated) {
                window.location = 'http://localhost:8000/auth/login';
                return null;
            } else {
                return <ComposedComponent {...props}/>
            }
        }

        render() {
            return (
                <Route {...rest} render={this.handleRender.bind(this)}/>
            )
        }
    }

    function mapStateToProps(state) {
        return {authenticated: state.auth.authenticated};
    }

    const AuthenticationContainer = connect(mapStateToProps)(Authentication)
    return <AuthenticationContainer/>
}