import React from 'react'
import {Component} from 'react'
import dotenv from 'dotenv'
import TodoApp from './TodoApp'

export default class App extends Component { 
    render()  { 
            console.info('app')
            loadEnv()
            return (<TodoApp />)
        }
}

function loadEnv()  {
try {
     const config =dotenv.config()
     console.log(config.parsed)
   }
 catch(error) {
     console.log(error)
     throw error

     }
 }
 
export {loadEnv }
