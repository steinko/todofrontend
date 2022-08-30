 //import Logger from './Logger'

 class HelloWorldBeanService {
    

  
  async getMessage() {
    //let logger = Logger.getLogger();
    try {
      
       ///logger.info('HelloWorldBeanService')
       //logger.info('Server Url: ', Enviroment.serverUrl())

       //logger.info('Env',Enviroment.env())

      let response = await fetch('http://localhost:9000/hello-world-bean')
      let json = await response.json()
      let message = json.message
      //logger.info('Message',message)
      return  message
    } catch(error)  { 
       // logger.error('Error Hello world bean',error)
        throw error
    }

   }
}
export default HelloWorldBeanService
