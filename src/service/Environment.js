 export async function  serverUrl() {
    try {
      console.info('Environment')
      const frontendUrl = window.location.hostname
      const port = window.location.port
      console.log(frontendUrl)
      console.log(port)

      if (port.length === 0) {
         const object = { serverUrl: "non",
                          env: "build"
                        }
         return object;
        }  
      else {
          const backendUrl = 'http://'+ frontendUrl + ':'+ port + '/backendUrl'
          console.log(backendUrl)
          let response = await fetch(backendUrl)
          let json = await response.json()
          console.info('Environment response')
          console.info(json)
          return  json  
        }    
         
    } catch(error)  { 
        console.error(error)
        throw error
    }
      
}