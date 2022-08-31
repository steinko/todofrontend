import React from 'react'
import {Component} from 'react'
import Login from '../login/Login'
import Logout from  '../logout/Logout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Welcome from '../welcome/Welcome';
import TodoList from '../todolist/TodoList'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Blank from '../blank/Blank'
import TodoComponent from '../todocomponent/TodoComponent'
import AuthenticatedRoute from '../autenticatedroute/AuthenticateRoute'

export default class TodoApp extends Component 
{          
          
    

    render(){
              
        return(
           <div className="TodoApp">
               <Router >
                   <>
                     <Header/>
                     
                     <Switch>
                       <Route path="/" exact                        component = {Blank}/>
                       <Route path="/login"                         component = {Login}/>
                       <Route path="/logout"                        component = {Logout}/>
                       <AuthenticatedRoute  path="/welcome/:name"   component = {Welcome}/>
                       <AuthenticatedRoute path="/todos"            component = {TodoList}/>
                       <AuthenticatedRoute path="/todo"             component = {TodoComponent}/>
                       <Route                                       component = {ErrorMessage}/>
                     </Switch>
                     <Footer/>
                   </>
               </Router>

            </div>
           
         )
    }


    }

    function ErrorMessage(){
        return <div > <h1 id="error">Unknown Path</h1></div>
     }
