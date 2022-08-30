import React from 'react'
import {Component} from 'react'
import AutheniationcService from '../../../service/authenticationService/AutenticationService.js'


export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = { username: 'in28minutes',
                       password: '',
                       showSucessMessage: false,
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
            let aut =AutheniationcService
            aut.registerSucessfulLogin(this.state.username, this.state.password)
            console.log('sucessfull login')
            console.log(this.state)
           // this.props.history.push(`/welcome/${this.state.username}`)

        }
        else 
         {
            console.log('loging failure')
            this.setState ( { showSucessMessage: false }) 
            this.setState (  { hasLoginFailed: true }) 
                      
          }
          

      }
     

    render() { return (           
                <div>


                  <h1>Login</h1>
                     {this.state.hasLoginFailed && <h1 id= "invalid">Invalid Credentials </h1>}
                     {this.state.showSucessMessage &&<h1>Sucsessfull Login</h1>}
                
                  <label>
                    User Name:
                    <input 
                      id = 'username'
                      type='text' 
                      name='username' 
                      value= {this.state.username} 
                      onChange= {this.handleChange}
                    />
                  </label>
             
                  <label>
                    Password: 
                    <input 
                      id="password"
                      type='password' 
                      name='password' 
                      value= {this.state.password} 
                      onChange= {this.handleChange}
                    />
                  </label>
              
                  <button 
                    id="loginButton" 
                    data-testid="Login"
                    onClick= {this.loginClick}>
                    Login
                  </button>


              </div> 
          )}
}