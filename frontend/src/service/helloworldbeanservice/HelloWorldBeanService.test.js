import HelloWorldBeanService from './HelloWorldBeanService'
import Enviroment from '../enviroment/Environment'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
	
  // Provide request handlers
  rest.get( '/hello-world-bean', (req, res, ctx) => {
	console.info("mock get message")
    return res(
      ctx.json({ message: 'Hello World Bean'}),
    )
  }),
)


describe ('Hello World Bean Test', () =>  {
	
	beforeAll(() => {
	  console.info("start mock server")
      // Establish requests interception layer before all tests.
      server.listen()
     })

     afterAll(() => {
        // Clean up after all tests are done, preventing this
        // interception layer from affecting irrelevant tests.
         server.close()
         console.info("mock server closed")
      })


     it('should exist ', async () => {
	      let  helloWorldBeanService = new HelloWorldBeanService()
          expect(helloWorldBeanService).not.toBeNull()
      })

     it('should recive hellow world from the server ', async () => {
	    let helloWorldBeanService = new HelloWorldBeanService()
        expect(await helloWorldBeanService.getMessage()).toBe('Hello World Bean')
      })
})

