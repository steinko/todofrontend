import React from 'react'
import {Component} from 'react'
import TodoApp from './TodoApp'
import Logging from '@google-cloud/logging'
let  log
let metaData
export default class App extends Component { 
    
    constructor() { 
       super()
       this.createLog()
     }

     async createLog() { 
         const logging = new Logging(process.env.GAE_APPLICATION)
         log = logging.log('my-log')
          metaData =   { 
            resource:  {  type:'global' }
          }
      
            const entry = log.entry(metaData, 'Log Entry')
            await log.write(entry)
            console.log('Hello World')
       }

    render()  { 
           
            console.info('app')
            return (<TodoApp />)
        }
}
