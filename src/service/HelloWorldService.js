class HelloWorldService {
  constructor (props) {
    this.state = {
      serverURL: process.env.SERVER_URL

    }
  }
  async getMessage () {
     try {
       let response = await fetch(this.state.serverURL + '/hello-world')
       let text = await response.text()
        return  text
    } catch(error)  { 
        console.error(error)
        throw error
    }
  }
}
export default new HelloWorldService()
