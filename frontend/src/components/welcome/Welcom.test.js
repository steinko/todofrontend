import Welcome from './Welcome'
import React from 'react'

import {render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


describe(' test existence of Welcome', () => {

  xit('should exists a Welcome components', () => {

   // let {getByText}  =  render(<Welcome match.params.name= 'Stein' }/>)
    expect(getText).not.toBeNull()
  })

  xit('should display Welcome Stein', () => {
   // let {getByText}  =  render(<Welcome match.params.name = 'Stein'/>)
    expect(getText('Welcome Stein')).not.toBeNull()
  })

  xit('should display Welcome Oddmund', () => {
    //let {getByText}  =  render(<Welcome match.params.name = 'Oddmund'/>)
    expect(getText('Welcome Oddmund')).not.toBeNull()
  })

  xit('should display click hear', () => {
    let {getByText}  =  render(<Welcom/>)
     expect(getByText('Click here')).not.toBeNull()
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
