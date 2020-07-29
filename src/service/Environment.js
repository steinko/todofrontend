 class Environment {

  static    serverUrl = ()=> {
         return process.env.BACKEND_URL   
    }

   static  env = () => {
        return process.env.ENV
   }
 }

export default Environment 