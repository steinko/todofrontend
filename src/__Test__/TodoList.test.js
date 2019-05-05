import TodoList from '../TodoList'
import React from 'react'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

describe(' test TodoList', () => {
  it('renders  ToDoList component', () => {
    const wrapper = shallow(<TodoList />)
    expect(wrapper.text()).toBe('To do list')
  })

})