 import { serverUrl } from './Environment'

 class HelloWorldBeanService {
  
  async getMessage () {
    try {
       const cserverUrl = await serverUrl()
       console.info('HelloWorldBeanService')
       console.info(cserverUrl.serverUrl)
       console.info(cserverUrl.env)

      let response = await fetch(cserverUrl.serverUrl + '/hello-world-bean')
      console.log(response)
      let json = await response.json()
      let message = json.message
       console.log(message)
      return  message
    } catch(error)  { 
        console.error(error)
        throw error
    }

   }
}
export default new HelloWorldBeanService()
