var winston = require('winston');
var Elasticsearch = require('winston-elasticsearch');
 
class Logger { 

   constructor() {
	 this.instance=null
	 this.esTransportOpts = {
	   level: 'info' ,
     clientOpts: { node: 'http://localhost:9200'},        
      index:'todo-frontend'
	 }

     this.logger = winston.createLogger({
           transports: [
               new Elasticsearch(this.esTransportOpts)
           ]
      })
    }

	static getLogger() { 
      if (this.instance == null)  { 
        this.instance =  new Logger()
      }
     return this.logger
   }
 } 
export default Logger