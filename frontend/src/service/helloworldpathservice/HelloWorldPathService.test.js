import  Environment from '../Environment'
import HelloWorldPathService from '../HelloWorldPathService'

beforeAll( async ()=>  { 
       
       if (Environment.env() === 'build') {
         global.fetch = require('jest-fetch-mock')
         fetch.resetMocks()
         fetch.mockResponseOnce( JSON.stringify({ message: "Hello World Stein" }) )
       } 
  })

xit('should recive hellow world from the server ', async () => {
    const message =  await HelloWorldPathService.getMessage('stein')
    expect.assertions(1)
    expect(message).toBe("{\"message\":\"Hello World Stein\"}")
  })