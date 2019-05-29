import {serverUrl} from '../Environment'
import HelloWorldService from '../HelloWorldService'

describe('test hello world service', () => {
  let cserverUrl
  beforeAll(async ()=> {
      cserverUrl = await serverUrl()
       console.log(cserverUrl.env)
    if (cserverUrl.env === 'build') {
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

  it('should load  in devekpment enviroment', () => {
      if (cserverUrl.env === 'development') {
         expect(cserverUrl.serverUrl).toBe('http://localhost:8080')
       }
   })

  it('should load SERVER_URL in build enviroment', () => {
      if (cserverUrl.env === 'build') {
         expect(cserverUrl.serverUrl).toBe('non')
       }
   })

  it('should load SERVER_URL in test enviroment', () => {
      if (cserverUrl.env === 'test') {
         expect(cserverUrl.serverUrl).toBe('https://dot-project45916.appspot.com')
       }
   })
 })

