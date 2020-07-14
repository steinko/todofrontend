import Enviromment from '../Environment'

describe('test enviromnt', () => {
  

  it('should load in development enviroment', () => {
     if (Enviromment.env() === 'development') {
         expect(Enviromment.serverUrl()).toBe('http://localhost:8080')
       }
   })

  it('should load SERVER_URL in build enviroment', () => {
      if (Enviromment.env() === 'build') {
         expect(Enviromment.serverUrl()).toBe('non')
       }
   })

  xit('should load SERVER_URL in test enviroment', () => {
      if (Enviromment.env.env === 'test') {
         expect(Enviromment.serverUrl()).toBe('https://dot-project45916.appspot.com')
       }
   })

})
