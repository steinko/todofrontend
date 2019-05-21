import HelloWorldService from '../HelloWorldService'

beforeAll(()=> {
  if (process.env.ENVIROMENT === 'build') {
     console.info("ENVIROMENT=== 'build'")
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

it('should load SERVER_URL in devekpment enviroment', () => {
      if (process.env.ENVIROMENT === 'dev') {
         expect(process.env.SERVER_URL).toBe('http://localhost:8080')
       }
   })

it('should load SERVER_URL in build enviroment', () => {
      if (process.env.ENVIROMENT === 'build') {
         expect(process.env.SERVER_URL).toBe('non')
       }
   })

it('should load SERVER_URL in test enviroment', () => {
      if (process.env.ENVIROMENT === 'test') {
         expect(process.env.SERVER_URL).toBe('https://todofrontend-dot-project45914.appspot.com')
       }
   })


