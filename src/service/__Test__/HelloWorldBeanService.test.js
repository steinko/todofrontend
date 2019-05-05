import HelloWorldBeanService from '../HelloWorldBeanService'

it('should recive hellow world from the server ', async () => {
  const message =  await HelloWorldBeanService.getMessage()
  expect.assertions(1)
  expect(message).toBe('Hello World Bean')
})
