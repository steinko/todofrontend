import React from 'react'
import {Component} from 'react'
import TodoApp from './components/todo/todoapp/TodoApp'

export default class App extends Component { 
    constructor (props) { 
        super(props)  
        
    }


    render()  { 
            return (<TodoApp history={this.props.history} />)
        }
}
