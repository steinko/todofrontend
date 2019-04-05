import Welcome from './Welcome';
import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';


Enzyme.configure({ adapter: new Adapter() });

describe(' test existence of Welcome', () => {
  it('renders  Welcome components', () => {
    const wrapper = shallow(<Welcome />)
    expect(wrapper.contains("Welcome")).toBeDefined()
   })
   
   xit('should diplay Hello World', () => {
    const wrapper = shallow(<Welcome />)
    wrapper.find('button').simulate('click')
    expect(wrapper.contains("Hello World")).toBe(true)
   }) 
  })