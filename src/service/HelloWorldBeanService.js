class HelloWorldBeanService {
  constructor (props) {
    this.state = {
      serverURL: 'http://localhost:8080'

    }
  }
  async getMessage () {
    try {
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
