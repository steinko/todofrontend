import HelloWorldService from './HelloWorldService'

describe('test hello world service', () => {

  it('should exist', () => { 
	  expect( HelloWorldService).not.toBeNull()
   })


  it('should recive hellow world from the server ', async () => {
    fetch.mockResponseOnce('Hello World')
    const message =  await HelloWorldService.getMessage()
    expect(message).toBe('Hello World')
  })

})

