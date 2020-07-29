import Enviroment from '../Environment'
import Logger from '../Logger'

class HelloWorldService {
  
  async getMessage () {
     let logger = Logger.getLogger()
     try {
       //logger.info('HelloWorldService')
       let urlstring= Enviroment.serverUrl() + '/hello-world'
       let response = await fetch(urlstring)
       ///logger.info('Response:',response)
       let text = await response.text()
        return  text
    } catch(error)  { 
        logger.error('error')
        throw error
    }
  }
}
export default new HelloWorldService()
