import React from 'react'
import {Component} from 'react'
import  {Link} from 'react-router-dom'
import Logout from '../logout/Logout'
import AuthenticationService from '../../../service/authenticationService/AutenticationService'

class Header extends Component{
   
	render () {
      let aut = AuthenticationService
     const isLogIn = aut.isLogin()
		return (<header>
                  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.in28minutes.com" className="navbar-brand">in28Minutes</a></div>
                    <ul className="navbar-nav">
                        { isLogIn && <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>}
                        { isLogIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isLogIn && <li><Link id= "loginLink" className="nav-link" to="/login">Login</Link></li>}
                        {isLogIn && <li><Link className="nav-link" to="/logout" data-testid= 'logOut' onClick = {AuthenticationService.logOut}>Logout</Link></li>}
                    </ul>
                  </nav>
               </header>)
	}
}
export default Header