 class Environment {

  static    serverUrl = ()=> {
         return  "http://localhost:8080";   
    }

   static  env = () => {
        return process.env.ENV
   }
 }

export default Environment 