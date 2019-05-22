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

describe('unit test  loadenv', () => {
   

   it('should load enviroment variables', () => {
         expect(process.env.ENVIRONMENT).toBeDefined() 
         expect(process.env.SERVER_URL).toBeDefined()
       })

    it('should load SERVER_URL in build enviroment', () => {
    
      if (process.env.ENVIRONMENT === 'build') {
         expect(process.env.SERVER_URL).toBe('non')
       }
   })

    it('should load SERVER_URL in test enviroment', () => {
  
      if (process.env.ENVIRONMENT === 'test') {
         expect(process.env.SERVER_URL).toBe('https://todofrontend-dot-project45914.appspot.com')
       }
   })
 })

