import React from 'react'
import {Component} from 'react'
export default class Login extends Component {
    render() { return <div> 
        User Name:<input type='text' name='userName' />
        Password: <input type='password' name='password' />
        <button>Login</button>
    </div> }
}