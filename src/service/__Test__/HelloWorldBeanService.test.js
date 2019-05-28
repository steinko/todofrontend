import  { serverUrl } from '../Environment'
import HelloWorldBeanService from '../HelloWorldBeanService'

describe ('Hello World Bean Test', () =>  {
  const cserverUrl = serverUrl()
  beforeAll( ()=>  { if (cserverUrl.env === 'build') {
       global.fetch = require('jest-fetch-mock')
       console.info("cserverUrl.env === 'build'")
       fetch.resetMocks()
       fetch.mockResponseOnce( JSON.stringify({ message: "Hello World Bean" }) )
     } 
  })

  it('should recive hellow world from the server ', async () => {
    const message =  await HelloWorldBeanService.getMessage()
    expect.assertions(1)
    expect(message).toBe('Hello World Bean')
  })
})

