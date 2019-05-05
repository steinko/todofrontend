import HelloWorldService from '../HelloWorldService'

it('should recive hellow world from the server ', async () => {
  const message =  await HelloWorldService.getMessage()
  expect.assertions(1)
  expect(message).toBe('Hello World')
})
