import HelloWorldBeanService from '../HelloWorldBeanService'

it('should recive hellow world from the server ', async () => {
 
  if (process.env.ENVIROMENT === 'build') {
       global.fetch = require('jest-fetch-mock')
       console.info("ENVIROMENT === 'build'")
       fetch.resetMocks()
       fetch.mockResponseOnce( JSON.stringify({ message: "Hello World Bean" }) )
     } 
     
  const message =  await HelloWorldBeanService.getMessage()
  expect.assertions(1)
  expect(message).toBe('Hello World Bean')
})
