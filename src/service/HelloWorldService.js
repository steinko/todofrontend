import Enviroment from './Environment'
//import Logger from './Logger'


class HelloWorldService {
  
  async getMessage () {
     //let logger = Logger.getLogger()
     try {
       //logger.info('HelloWorldService')
       let response = await fetch(Enviroment.serverUrl() +'/hello-world')
       ///logger.info('Response:',response)
       let text = await response.text()
       //logger.info('Resonse Text',text)
        return  text
    } catch(error)  { 
        //logger.error('Hello World Service',error)
        throw error
    }
  }
}
export default new HelloWorldService()
