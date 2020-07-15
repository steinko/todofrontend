import App from '../App'
import TodoApp from '../TodoApp'
import React from 'react'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

describe(' test App', () => {
  it('renders  <App /> components', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(TodoApp)).toBeDefined()
  })
})



