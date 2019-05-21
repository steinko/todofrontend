import HelloWorldBeanService from '../HelloWorldBeanService'

beforeAll( ()=>  { if (process.env.ENVIRONMENT === 'build') {
       global.fetch = require('jest-fetch-mock')
       console.info("ENVIRONMENT === 'build'")
       fetch.resetMocks()
       fetch.mockResponseOnce( JSON.stringify({ message: "Hello World Bean" }) )
      } 
})

it('should recive hellow world from the server ', async () => {
  const message =  await HelloWorldBeanService.getMessage()
  expect.assertions(1)
  expect(message).toBe('Hello World Bean')
})

it('should load enviroment variables', () => {
         expect(process.env.ENVIRONMENT).toBeDefined() 
         expect(process.env.SERVER_URL).toBeDefined()
       })

it('should load SERVER_URL for development enviroment ', () => {
      if (process.env.ENVIRONMENT === 'dev') {
         expect(process.env.SERVER_URL).toBe('http://localhost:8080')
       }
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

