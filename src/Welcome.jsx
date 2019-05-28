import React from 'react'
import {Component} from 'react'
import HelloWorldService from  './service/HelloWorldService'
import HelloWorldBeanService from './service/HelloWorldBeanService'
export default class Welcome extends Component {
    constructor(pops){
        super(pops)
        this.helloWorldService= this.helloWorldService.bind(this)
        this.helloWorldBeanService= this.helloWorldBeanService.bind(this)
         } 

    state = { welcomMessage: '' } 

    render() { 
        return <div>
                   Welcome
                   <div>
                       Click here to displaye hello world
                       <button id='helloWorldButton' onClick={ this.helloWorldService } > Get Welcome Message </button>
                    <button id='helloWorldBeanButton' onClick={ this.helloWorldBeanService } > Get Welcome Bean Message </button>
                   </div>
                   <div id='welcomeMessage'>
                       { this.state.welcomMessage } 
                   </div>
            </div>
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