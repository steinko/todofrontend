import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from '../../../service/authenticationService/AutenticationService.js'

class AuthenticatedRoute extends Component {
    render() {
        let aut = AuthenticationService
        if (aut.isLogin()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login" />
        }

    }
}

export default AuthenticatedRoute