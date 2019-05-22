 import { serverUrl } from './Environment'

 class HelloWorldBeanService {
  constructor (props) {
    
    this.state = {
      serverURL: serverUrl()
    }
    console.log(this.state.serverURL)
  }
  async getMessage () {
    try {
      console.info(this.state.serverURL)
      let response = await fetch(this.state.serverURL + '/hello-world-bean')
      console.log(response)
      let json = await response.json()
      console.log(json)
      let message = json.message
      return  message
    } catch(error)  { 
        console.error(error)
        throw error
    }

   }
}
export default new HelloWorldBeanService()
