import React from 'react'
import {Component} from 'react'
import TodosService from '../../../service/todoservice/TodosService.js'

export default class TodoList extends Component { 

    constructor() { 
        super()
        this.state = {
           todos : [],
           message : ''
        }
        this.refreshTodos = this.refreshTodos.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
    }

    async componentDidMount(){  
       this.refreshTodos()
    }

    async refreshTodos () {
         let result = await TodosService.getTodos("stein")
         console.log(result)
         this.setState({todos:result })
    }


    async deleteTodo() {  
        await TodosService.deleteTodos("stein","0")
        this.refreshTodos()
 
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
                                            <td className= "todoDescription" >{todo.description}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td>{todo.isDone.toString()}</td>  
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                          <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                          <button className="btn btn-success" onClick={this.deleteTodoClicked}>Delete</button>
                    </div>
                </div>
            </div>
        )
   }
}