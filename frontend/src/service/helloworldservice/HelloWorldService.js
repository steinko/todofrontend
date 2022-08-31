import Enviroment from '../enviroment/Environment'

class HelloWorldService {
  
  async getMessage () {
     
     try {
       //logger.info('HelloWorldService')
       let urlstring= Enviroment.serverUrl() + '/hello-world'
       let response = await fetch(urlstring)
       ///logger.info('Response:',response)
       let text = await response.text()
        return  text
    } catch(error)  { 
        console.error(error)
        throw error
    }
  }
}
export default new HelloWorldService()
