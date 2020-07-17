import React from 'react'
import {Component} from 'react'

export default class TodoList extends Component { 
    constructor() { 
        super()
        this.state = {
           todos : [
                     { id: 1, description : 'Learn React', done:false, targetDate:new Date() },
                     { id: 2, description : 'Learn to dance', done:false, targetDate: new Date()}
                   ]
        }
    }


    render() { 
        return (
              <div>
                 <h1>To do list</h1>
                 <table>
                    <thead>
                        <tr>
                          <th>id</th>
                          <th>description</th>
                          <th>done</th>
                          <th>taget date </th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {  this.state.todos.map(todo =>
                          <tr key={todo.id} >
                            <td> {todo.id}</td>
                            <td> {todo.description}</td>
                            <td> {todo.done.toString()}</td>
                            <td> {todo.targetDate.toString()}</td>
                           </tr>
                        )}
                    </tbody>
                  </table>
              </div>
        )
   }
}