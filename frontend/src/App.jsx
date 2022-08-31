import React from 'react'
import {Component} from 'react'
import TodoApp from './components/todo/todoapp/TodoApp'

export default class App extends Component { 
    constructor (history) { 
        super()  
        this.history = history
    }


    render()  { 
            return (<TodoApp />)
        }
}
