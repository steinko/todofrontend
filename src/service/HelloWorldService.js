  class HelloWorldService{ 
    constructor(props) {
       this.state = {
            serverURL:  'http://localhost:8080'

        } 
    }
      async getMessage () { 
        let response =  await fetch(this.state.serverURL + '/hello-world')
        return await response.text()
     }
}
export default new HelloWorldService()