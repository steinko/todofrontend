import TodoApp from './TodoApp';
import React from 'react';
import { createBrowserHistory } from 'history';
import Welcome from '../welcome/Welcome'

 
describe(' test existence of ToDOApp', () => {
let  history = createBrowserHistory();


  beforeEach(() => {
    expect(render(<TodoApp />)).toBeDefined()
  })
 
  
  xit('should return welcome component', () => {
      history.push("/welcome")
     const welcome = history.location
    expect( welcome instanceof Welcome).toBe(true)
   })
   
    xit('should return loging component', () => {
     const loging = history.push("/login")
     //console.log(loging.debug())
     expect(loging.is('Login')).toBe(true)
   }) 

    xit('should return error message unkonowen patj', () => {
     const error = history.push("/error")
     expect(error.is('ErrorMessagen')).toBe(true)
   }) 

  

  })