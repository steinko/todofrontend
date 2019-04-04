import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import Login from './Login'


Enzyme.configure({ adapter: new Adapter() });


describe(' test  Login', () => {
  const wrapper = shallow(<Login />)
  
  it('Existance of Login components', () => {
    expect(wrapper).toBeDefined()
   }) 

   it('Existance of User Name', () => {
    expect(wrapper.text()).toMatch(/User Name:/)
   }) 

   it('Existance of Pass Word', () => {
    expect(wrapper.text()).toMatch(/Password:/)
   }) 

   it('Exis a input field of Username with default vailue in28minutes', () => {
    expect(wrapper.find('input').find({ type: 'text' }).find({ name: 'username' }).find({ value: 'in28minutes' })).toHaveLength(1)
   }) 

   xit('sholud store change username value', () => {
    wrapper.find({ name: 'username' }).simulate('change', { target: { value: 'stein' } })
    expect(wrapper.find({ value: 'stein' })).toHaveLength(1)
   }) 

   xit('sholud store changed password value', () => {
    wrapper.find({ name: 'password' }).simulate('change', { target: { value: 'coolPassword' } })
    expect(wrapper.find({ value: 'coolPassword' })).toHaveLength(1)
   }) 


   it('Existance of Pass Word', () => {
    expect(wrapper.find('input').find({ type: 'password' }).find({ name: 'password' })).toBeDefined()
   }) 

   it('Existance of Button', () => {
    expect(wrapper.find('button').text()).toContain('Login')
   }) 

   
     xit('should faile login', () => {

      wrapper.find({ name: 'password' }).simulate('change', { target: { value: 'coolPassword' } })
      const instance = wrapper.instance();
      instance.loginClick()
      expect(wrapper.state().showSucessMessage).toBeFalsy()
      expect(wrapper.state().hasLoginFailed).toBeTruthy()
     }) 

     it('should faile loging ', () => {
           wrapper.find({ name: 'password' }).simulate('change', { target: { value: 'coolPassword' } })
           wrapper.find('button').simulate('click')
           expect(wrapper.text()).toContain('Invalid Credentials')
       })

       

       it('should  failure login', () => {
           wrapper.find({ name: 'username' }).simulate('change', { target: { value: 'stein'} })
           wrapper.find({ name: 'password' }).simulate('change', { target: { value: 'dummy' } })
           wrapper.find('button').simulate('click')
           expect(wrapper.text()).toContain('Invalid Credentials')
       })
  })