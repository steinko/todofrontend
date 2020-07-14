import Logger from '../Logger'

it('should get a logger ', async  () => {
	let logger = Logger.getLogger()
    expect(logger.level).toBe('info')
  })

it('should be same object ', async  () => {
	let logger1 = Logger.getLogger()
	let logger2 = Logger.getLogger()
    expect(logger1).toBe(logger2)
  })

  it('should log a message ', async () => {
	let logger = Logger.getLogger()
	logger.info("cool logger")
  })




