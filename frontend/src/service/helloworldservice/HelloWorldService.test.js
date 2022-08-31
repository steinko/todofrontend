import HelloWorldService from './HelloWorldService'

describe('test hello world service', () => {

  it('should exist', () => { 
	  expect( HelloWorldService).not.toBeNull()
   })


  xit('should recive hellow world from the server ', async () => {
    fetch.mockResponseOnce('Hello World')
    const message =  await HelloWorldService.getMessage()
    expect(message).toBe('Hello World')
  })

})

