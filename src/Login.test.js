import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import Login from './Login'

Enzyme.configure({ adapter: new Adapter() });

describe(' test  Login', () => {
  it('Existance of Login components', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper).toBeDefined()
   }) 

   it('Existance of User Name', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.text()).toMatch(/User Name:/)
   }) 

   it('Existance of Pass Word', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.text()).toMatch(/Password:/)
   }) 

   it('Exis a input field of Username with default vailue in28minutes', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find('input').find({ type: 'text' }).find({ name: 'username' }).find({ value: 'in28minutes' })).toHaveLength(1)
   }) 

   it('sholud store change username value', () => {
    const wrapper = shallow(<Login />)
    wrapper.find({ name: 'username' }).simulate('change', { target: { value: 'stein' } })
    expect(wrapper.find({ value: 'stein' })).toHaveLength(1)
   }) 

   it('sholud store changed password value', () => {
    const wrapper = shallow(<Login />)
    wrapper.find({ name: 'password' }).simulate('change', { target: { value: 'coolPassword' } })
    expect(wrapper.find({ value: 'coolPassword' })).toHaveLength(1)
   }) 


   it('Existance of Pass Word', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find('input').find({ type: 'password' }).find({ name: 'password' })).toBeDefined()
   }) 

   it('Existance of Button', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find('button').text()).toContain('Login')
   }) 

  })