import HelloWorldService from '../HelloWorldService'

it('should recive hellow world from the server ', async () => {
  if (process.env.ENVIROMENT === 'build') {
     console.info("ENVIROMENT=== 'build'")
     global.fetch = require('jest-fetch-mock')
     fetch.resetMocks()
     fetch.mockResponseOnce(  new Promise(function(resolve, reject) {
                  resolve('Hello World Bean')
        })) 
  }

  const message =  await HelloWorldService.getMessage()
  expect.assertions(1)
  expect(message).toBe('Hello World')
})
