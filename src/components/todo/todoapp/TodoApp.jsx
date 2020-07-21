import React from 'react'
import {Component} from 'react'
import Login from '../login/Login'
import Logout from  '../logout/Logout'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Welcome from '../welcome/Welcome';
import TodoList from '../todolist/TodoList'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Blank from '../Blank'
import AuthenticatedRoute from '../autenticatedroute/AuthenticateRoute'


export default class TodoApp extends Component 
{  
    


    render(){
        return(
           <>
               <Router>
                   <div>
                     <Header/>
                     
                     <Switch>
                       <Route path="/" exact                        component = {Blank}/>
                       <Route path="/login"                         component = {Login}/>
                       <Route path="/logout"                        component = {Logout}/>
                       <AuthenticatedRoute  path="/welcome/:name"   component = {Welcome}/>
                       <AuthenticatedRoute path="/todos"            component = {TodoList}/>
                       <Route                                       component = {ErrorMessage}/>
                     </Switch>
                     <Footer/>
                   </div>
               </Router>
            </>
         )
    }


    }

    function ErrorMessage(){
        return <div > <h1 id="error">Unknown Path</h1></div>
     }
