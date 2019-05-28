import { serverUrl } from './Environment'
class HelloWorldService {
  
  async getMessage () {
     try {
       console.log('HelloWorldService')
       const cserverUrl = await serverUrl()
       console.log(cserverUrl)
       let response = await fetch(cserverUrl.serverUrl + '/hello-world')
       console.info(response)
       let text = await response.text()
       console.info(text)
        return  text
    } catch(error)  { 
        console.error(error)
        throw error
    }
  }
}
export default new HelloWorldService()
