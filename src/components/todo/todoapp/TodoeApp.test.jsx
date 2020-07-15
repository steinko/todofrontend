import TodoApp from './TodoApp';
import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { createBrowserHistory } from 'history';
import Welcome from '../welcome/Welcome'

Enzyme.configure({ adapter: new Adapter() });
 
describe(' test existence of ToDOApp', () => {
let  history = createBrowserHistory();
let  wrapper

  beforeEach(() => {
    wrapper = shallow(<TodoApp />)
  })
 
  it('renders  <TodoApp /> components', () => {
    expect(wrapper).toBeDefined()
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