import { serverUrl } from './Environment'
class HelloWorldService {
  
  async getMessage () {
     try {
       console.log('HelloWorldService')
       console.log(await serverUrl())
       let response = await fetch(await serverUrl() + '/hello-world')
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
