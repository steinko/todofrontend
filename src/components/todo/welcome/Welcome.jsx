import React from 'react'
import {Component} from 'react'
import  {Link} from 'react-router-dom'
import HelloWorldService from  '../../../service/HelloWorldService'
import HelloWorldBeanService from '../../../service/HelloWorldBeanService'

export default class Welcome extends Component {
    constructor(pops){
        super(pops)
        this.helloWorldService= this.helloWorldService.bind(this)
        this.helloWorldBeanService= this.helloWorldBeanService.bind(this)
        this.state = { welcomMessage: '' } 
    } 

    render() { 
        return ( <div>
                    <h1 id="welcome">Welcome {this.props.match.params.name} You can  manage youre todos </h1> <Link id='link'  to= "/todos"> here </Link>

                    <div>
                       Click here to displaye hello world
                       <button id='helloWorldButton' onClick={ this.helloWorldService } > Get Welcome Message </button>
                       <button id='helloWorldBeanButton' onClick={ this.helloWorldBeanService } > Get Welcome Bean Message </button>
                    </div>

                    <div id='message'>
                       { this.state.welcomMessage } 
                    </div>
 
                    <div>
                       <a href="/todos">Todos</a>
                    </div>

                </div>)
     }

    async helloWorldService() {   
         const data  = await HelloWorldService.getMessage()
         console.log(data)
         this.setState({welcomMessage: data })  
      } 
      
    async helloWorldBeanService() {    
         const data  = await HelloWorldBeanService.getMessage()
         console.log(data)
         this.setState({welcomMessage: data })  
      }   
}