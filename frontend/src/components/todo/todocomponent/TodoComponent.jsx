import React from 'react'
import { Component} from 'react'

export default class TodoCompnent extends Component {  
   constructor(props) { 
	   super(props)
	   this.state = {  id:1,
		               deccription: '',
					   targetDate:'',
					   isDone:false
		            }
   }


	render () { 
		        
		return (<div> <h1>Todo </h1>
		          <label>
					Description
					<input> {this.state.description}  </input>
				  </label>

				  <label>
					Target Date
					<input> {this.state.targetDate}  </input>
				  </label>

				  <label>
					Is Done ?
					<input> {this.state.isDone}  </input>
				  </label>
		        </div>) 
	}
}