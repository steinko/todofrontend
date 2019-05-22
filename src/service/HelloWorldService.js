import { serverUrl } from './Environment'
class HelloWorldService {
  constructor (props) {
    this.state = {
      serverURL: serverUrl()
     
    }
    console.log(this.state.serverURL)
  }
  async getMessage () {
     try {
       let response = await fetch(this.state.serverURL + '/hello-world')
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
