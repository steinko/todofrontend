import React from 'react'
import {Component} from 'react'
import HelloWorldService from  './service/HelloWorldService'
export default class Welcome extends Component {
    constructor(pops){
        super(pops)
        this.helloWorldService= this.helloWorldService.bind(this)
         } 

    state = { welcomMessage: '' } 

    render() { 
        return <div>
                   Welcome
                   <div>
                       Click here to displaye hello world
                       <button onClick={ this.helloWorldService } />
                   </div>
                   <div>
                       { this.state.welcomMessage} 
                   </div>
            </div>
     }

     helloWorldService() {    
         const mesage = HelloWorldService.getMessage();
         this.setState({welcomMessage: mesage })
         console.log('click on Hello World service')
      }   
}