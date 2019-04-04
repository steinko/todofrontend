import React from 'react'
import {Component} from 'react'
import Login from './Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Welcome from './Welcome';

export default class TodoApp extends Component 
{
    render(){
        return(
           <>
               <Router>
                   <div>
                     <Switch>
                       <Route path="/login"     component = {Login}/>
                       <Route path="/welcome"   component = {Welcome}/>
                       <Route                   component = {ErrorMessage}/>
                     </Switch>
                   </div>
               </Router>
            </>
         )
    }


    }

    function ErrorMessage(){
        return <div> Unknown Path</div>
     }
