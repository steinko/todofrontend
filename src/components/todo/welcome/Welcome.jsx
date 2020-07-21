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
        return ( 
                <>
                  <h1>Welcome!</h1>
                  <div className="container">
                      Welcome {this.props.match.params.name}.
                      You can manage your todos <Link to="/todos">here</Link>.
                  </div>
                  <div className="container">
                      Click here to get a customized welcome message.
                      <button onClick={this.retrieveWelcomeMessage}
                          className="btn btn-success">Get Welcome Message</button>
                  </div>
                  <div className="container">
                      {this.state.welcomeMessage}
                   </div>

               </>
                )
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