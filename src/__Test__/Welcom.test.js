import Welcome from '../Welcome'
import React from 'react'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

describe(' test existence of Welcome', () => {
  it('renders  Welcome components', () => {
    const wrapper = shallow(<Welcome />)
    expect(wrapper.text()).toBe('WelcomeClick here to displaye hello world Get Welcome Message  Get Welcome Bean Message ')
  })

  xit('should diplay Hello World', () => {
    const wrapper = shallow(<Welcome />)
    wrapper.find('#helloWorldButton').simulate('click')
   expect(wrapper.find('#welcomeMessage').text()).toBe('Hello World')
  })

  xit('should diplay Hello World', () => {
    const wrapper = shallow(<Welcome />)
    wrapper.find('#helloWorldBeanButton').simulate('click')
   expect(wrapper.find('#welcomeMessage').text()).toBe('Hello World Bean')
  })

  xit('should diplay Hello World', () => {
    const wrapper = shallow(<Welcome />)
    wrapper.find('#helloWorldBeanButton').simulate('click')
   expect(wrapper.find('#welcomeMessage').text()).toBe('Hello World in28minutes')
   })

   xit('should diplay Hello World', () => {
    const wrapper = shallow(<Welcome />)
    const instance = wrapper.instance()
    instance.helloWorldService()
    expect(instance.state.welcomeMessage).toBe('Hello World')
   })
})
