import HelloWorldBeanService from './HelloWorldBeanService'
describe ('Hello World Bean Test', () =>  {
   let helloWorldBeanService 
  beforeEach (() => { 
        helloWorldBeanService = new HelloWorldBeanService()
	      fetch.resetMocks()
   })

  it('should exist ', async () => {
        expect(helloWorldBeanService).not.toBeNull()
  })

  it('should recive hellow world from the server ', async () => {
    fetch.mockResponseOnce(JSON.stringify({ message: 'Hello World Bean'}))
    expect(await helloWorldBeanService.getMessage()).toBe('Hello World Bean')
  })
})

