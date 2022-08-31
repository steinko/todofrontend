import Enviroment from '../enviroment/Environment'



class HelloWorldPathService {
  
  async getMessage (path) {
     
     try {
       console.info('HelloWorldPathService path')
       let response = await fetch(Enviroment.serverUrl() + '/hello-world/' + path )
       console.info('Response:',response)
       let text = await response.text()
       console.info('Resonse Text',text)
        return  text
    } catch(error)  { 
        console.error('Hello World Path Service',error)
        throw error
    }
  }
}
export default new HelloWorldPathService()
