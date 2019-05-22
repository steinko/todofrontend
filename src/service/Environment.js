import dotenv from 'dotenv' 
export function serverUrl(){
    try {
      const config = dotenv.config()
      console.info(config.parsed) 
      console.info(process.env.SERVER_URL)
      return process.env.SERVER_URL
    } catch(error)
    { 
        console.error(error)
        throw(error)
     }
}