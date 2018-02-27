import React from 'react'
import ReactDOM from 'react-dom'
import { Routes } from './Routes/Routes'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'


import reducers from './reducers'
import { GlobalNav } from './components/GlobalNav/GlobalNav'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)
const token = localStorage.getItem('token')
console.log(token);

const title = "Minimilistic React-webpack-3-boilerplate [2017]"
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <GlobalNav/>
                    <div className="slds-container--large">
                        <div className="slds-grid slds-wrap slds-grid--pull-padded">
                            <div className="slds-col--padded slds-size--1-of-1">1</div>
                            <div className="slds-col--padded slds-size--1-of-2 slds-medium-size--5-of-6 slds-large-size--8-of-12">2</div>
                            <div className="slds-col--padded slds-size--1-of-2 slds-medium-size--1-of-6 slds-large-size--4-of-12">3</div>
                            <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2 slds-large-size--1-of-3">4</div>
                            <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2 slds-large-size--1-of-3">5</div>
                            <div className="slds-col--padded slds-size--1-of-1 slds-large-size--1-of-3">
                                <div className="slds-grid slds-wrap slds-grid--pull-padded">
                                    <div className="slds-col--padded slds-size--1-of-2 slds-medium-size--1-of-1 slds-large-size--1-of-2">6</div>
                                    <div className="slds-col--padded slds-size--1-of-2 slds-medium-size--1-of-1 slds-large-size--1-of-2">7</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-half is-offset-one-quarter">
                        <div className="title">{title}</div>
                    </div>
                    <Routes />
                </div>
            </Provider>
        )
    }
}