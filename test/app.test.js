import React from 'react';
import { shallow } from 'enzyme';


import App from '../src/App';


describe(' test App', () => {
  it('renders  <App /> components', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.text()).toContain('Hello Component')
   }) 
  })