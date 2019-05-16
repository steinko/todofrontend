 // eslint-disable-next-line
import env from 'node-env-file'
 
class HelloWorldBeanService {
  constructor (props) {
    
    this.state = {
      serverURL: process.env.SERVER_URL
    }
  }
  async getMessage () {
    try {
      console.info(this.state.serverURL)
      let response = await fetch(this.state.serverURL + '/hello-world-bean')
      let json = await response.json()
      let message = json.message
      return  message
    } catch(error)  { 
        console.error(error)
        throw error
    }

   }
}
export default new HelloWorldBeanService()
