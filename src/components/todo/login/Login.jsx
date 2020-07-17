import React from 'react'
import {Component} from 'react'
import  './Login.css'

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
           
            console.log('sucessfull login')
            console.log(this.state)
            this.props.history.push(`/welcome/${this.state.username}`)

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
           {this.state.hasLoginFailed && <div><h1 id= "invalid">Invalid Credentials </h1></div>}

           {this.state.showSucessMessage && <div>Sucsessfull Loging</div>}
         
           <div>
              
             <div>
             <label>
                 User Name: 
                
                 <input 
                   type='text' 
                   name='username' 
                   value= {this.state.username} 
                   onChange= {this.handleChange}
                />
             </label>
             </div>
             
             <div>
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
                
             </div>
             

             <div>
                <button id="loginbutton" onClick= {this.loginClick}>Login</button>
           </div>
           </div>
           </div>
           
     )}
}