import Enviroment from './Environment'
import Logger from './Logger'


class HelloWorldPathService {
  
  async getMessage (path) {
     let logger = Logger.getLogger()
     try {
       logger.info('HelloWorldPathService path')
       let response = await fetch(Enviroment.serverUrl() + '/hello-world/' + path )
       logger.info('Response:',response)
       let text = await response.text()
       logger.info('Resonse Text',text)
        return  text
    } catch(error)  { 
        logger.error('Hello World Path Service',error)
        throw error
    }
  }
}
export default new HelloWorldPathService()
