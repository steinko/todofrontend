import React from 'react'
import {Component} from 'react'
import  {Link} from 'react-router-dom'
import HelloWorldService from  '../../service/helloworldservice/HelloWorldService'
import HelloWorldBeanService from '../../service/helloworldbeanservice/HelloWorldBeanService'

export default class Welcome extends Component {
    constructor(pops){
        super(pops)
        this.helloWorldService= this.helloWorldService.bind(this)
        this.helloWorldBeanService= this.helloWorldBeanService.bind(this)
        this.state = { welcomMessage: 'Welcome' } 
    } 

    render() { 
        return ( 
                <>
                  <h1 id="welcome">Welcome!</h1>
                  <div className="container">
                      Welcome
                      You can manage your todos <Link id='todoLink' to="/todos">here</Link>.
                  </div>
                  <div className="container">
                      Click here to get a customized welcome message.
                      <button onClick={ this.helloWorldService}
                          className="btn btn-success">Get Welcome Message</button>
                  </div>

                  <div className="container">
                      Click here to get a welcome message.
                      <button onClick={ this.helloWorldBeanService}
                          className="btn btn-success">Get Welcome Been Message</button>
                  </div>
                  <div className="container">
                      {this.state.welcomeMessage}
                   </div>

               </>
                )
     }

    async helloWorldService() {  
        try  {
             const data  = await HelloWorldService.getMessage()
              console.log(data)
               this.setState({welcomMessage: data })  
         } catch (error) {  
                 this.setState({welcomMessage: error.getMessage() }) 
             }
        }
      
    async helloWorldBeanService() { 
         try  {  
                 const data  = await HelloWorldBeanService.getMessage()
                 console.log(data)
                this.setState({welcomMessage: data })  
            } catch (error) {  

             }
      }   
}