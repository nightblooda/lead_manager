import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './layouts/Header';
import Dashboard from './leads/Dashboard';
import Register from './accounts/Register';
import Login from './accounts/Login';
import PrivateRoute from './common/PrivateRoute'

import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import { Provider } from 'react-redux'
import store from '../store'
import Alerts from './layouts/Alerts';

import { loadUser } from '../actions/auth'

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser())
    }

    render() {
        return (
            <Provider store = {store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <Router>
                            <Header />
                            <Alerts />
                            <div className="container">
                                <Switch>
                                    <PrivateRoute exact path="/" component={Dashboard} />
                                    <Route exact path="/register" component={Register} />
                                    <Route exact path="/login" component={Login} />
                                </Switch>
                            </div>
                        </Router>
                    </Fragment>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
