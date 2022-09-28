 //import Logger from './Logger'
import Enviroment from  '../enviroment/Environment'

 class HelloWorldBeanService {
    

  
  async getMessage() {
    //let logger = Logger.getLogger();
    try {
      
             ///logger.info('HelloWorldBeanService')
             //logger.info('Server Url: ', Enviroment.serverUrl())

             //logger.info('Env',Enviroment.env())

             let response = await fetch(Enviroment.serverUrl()+ '/hello-world-bean')
             let message = await response.json()
      
              //logger.info('Message',message)
              return  message
         } catch(error)  { 
                           // logger.error('Error Hello world bean',error)
                           throw error
         }
   }
}
export default HelloWorldBeanService
