import React from 'react'
import {Component} from 'react'
import Login from '../login/Login'
import Logout from  '../logout/Logout'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Welcome from '../welcome/Welcome';
import TodoList from '../todolist/TodoList'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Blank from '../blank/Blank'
import TodoComponent from '../todocomponent/TodoComponent'


export default class TodoApp extends Component 
{          constructor(props) {
	          super(props)
	
           }
          
    

    render(){
              
        return(
           <div className="TodoApp">
               <Router history={this.props.history}>
                  <Routes>
                     <Route path="/" element={<Login />} />
                    <Route path="login" element={<Login  history =   {this.props.history} />}/>
                    <Route path="welcome/:name" element={<Welcome />} />
                  </Routes>
                </Router>

            </div>
           
         )
    }


    }

    function ErrorMessage(){
        return <div > <h1 id="error">Unknown Path</h1></div>
     }
