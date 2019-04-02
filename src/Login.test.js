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

   it('Existance of Username', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find('input').find({ type: 'text' }).find({ namee: 'username' })).toBeDefined()
   }) 

   it('Existance of Pass Word', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find('input').find({ type: 'password' }).find({ namee: 'password' })).toBeDefined()
   }) 

   it('Existance of Button', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find('button').text()).toContain('Login')
   }) 

  })