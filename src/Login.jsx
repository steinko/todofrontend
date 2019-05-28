import React from 'react'
import {Component} from 'react'
export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = { username: 'in28minutes',
                       password: '',
                       showSucessMessage: true,
                       hasLoginFailed: false
                     }
        this.handleChange = this.handleChange.bind(this)
        this.loginClick = this.loginClick.bind(this) 
     }

 /**
 * Set the evenet as a state
 *
 * @param {event}  The event to be stored.
 */
     handleChange(event) { 

        this.setState({[event.target.name]
          :event.target.value })
      }

      loginClick()   {
        if (this.state.username ==='in28minutes' && this.state.password === 'dummy') { 
           
            console.log('sucessfull login')
            console.log(this.state)
            this.props.history.push("/welcome")

        }
        else 
         {
            console.log('loging failure')
            this.setState ( { showSucessMessage: false }) 
            this.setState (  { hasLoginFailed: true }) 
                      
          }
          

      }
     

    render() { return <div> 
         {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
         {this.state.showSucessMessage && <div>Sucsessfull Loging</div>}

        User Name:<input type='text' name='username' value= {this.state.username} onChange= {this.handleChange}/>
        Password: <input type='password' name='password' value= {this.state.password} onChange= {this.handleChange}/>
        <button onClick= {this.loginClick}>Login</button>
    </div> }
}
