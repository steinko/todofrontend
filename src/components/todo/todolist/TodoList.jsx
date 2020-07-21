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
                <h1>List Todos</h1>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th> 
                                <th>Description</th>                             
                               <th>Target Date</th>
                                <th>IsCompleted?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.id}</td>
                                            <td>{todo.description}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td>{todo.done.toString()}</td>  
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
   }
}