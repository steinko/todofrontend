import Environment from '../Environment'
import HelloWorldService from '../HelloWorldService'

describe('test hello world service', () => {
  
  beforeAll(async ()=> {
      
    if (Environment.env() === 'build') {
       console.info("serverUrl.env=== 'build'")
       global.fetch = require('jest-fetch-mock')
       fetch.resetMocks()
       fetch.mockResponseOnce( 'Hello World')
    }
  })

  it('should recive hellow world from the server ', async () => {
    const message =  await HelloWorldService.getMessage()
    expect.assertions(1)
    expect(message).toBe('Hello World')
  })

 })

