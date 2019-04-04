import TodoApp from '../src/TodoApp';
import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe(' test existence of ToDOApp', () => {
  it('renders  <TodoApp /> components', () => {
    const wrapper = shallow(<TodoApp />)
    expect(wrapper).toBeDefined()
   }) 
  })