import React from 'react'
import {Component} from 'react'
export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = { username: 'in28minutes',
                       password: ''
                     }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
     }

     handleUsernameChange(event) { 

        this.setState({username: event.target.value })
      }

      handlePasswordChange(event){ 

        this.setState({password: event.target.value })
      }

    render() { return <div> 
        User Name:<input type='text' name='username' value= {this.state.username} onChange= {this.handleUsernameChange}/>
        Password: <input type='password' name='password' value= {this.state.password} onChange= {this.handlePasswordChange}/>
        <button>Login</button>
    </div> }
}