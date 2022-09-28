import React from 'react'
import {Component} from 'react'
import  {Link} from 'react-router-dom'

class Header extends Component{
     
	render () {
		return (<header>
		         
                  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.in28minutes.com" className="navbar-brand">in28Minutes</a></div>
                    <ul className="navbar-nav">
                        {<li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>}
                        { <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    
                  </nav>
           </header>)
	}
}
export default Header