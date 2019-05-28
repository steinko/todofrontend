import {serverUrl }from '../Environment'

describe('test enviromnt', () => {
  const cserverUrl = serverUrl()

  it('should load in development enviroment', () => {
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
