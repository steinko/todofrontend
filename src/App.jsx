import React from 'react'
import {Component} from 'react'
import TodoApp from './TodoApp'


export default class App extends Component { 
    


    render()  { 
            //Sending error message to server
            //logger.error("test error message");
           //Sending info log to server 
           // logger.info("test info");
            console.info('app')
            return (<TodoApp />)
        }
}
