var winston = require('winston');
var Elasticsearch = require('winston-elasticsearch');
  var instance
  var logger
  var esTransportOpts = {
  level: 'info' }

class Logger { 

    constructor() {
        logger = winston.createLogger({
           transports: [
               new Elasticsearch(esTransportOpts)
          ]
       })
    }

	 static getLogger() { 
     if (!instance)  { 
        instance = new Logger()
      }
     return logger
   }


   createLogger () { 
	    let logger = winston.createLogger({
           level: 'info',
           format: winston.format.json(),
            defaultMeta: { service: 'user-service' },
            transports: [
               
                   new winston.transports.File({ filename: 'combined.log' })
            ]
        });

         //
         // If we're not in production then log to the `console` with the format:
         // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
         // 
         if (process.env.NODE_ENV !== 'production') {
           logger.add(new winston.transports.Console({
            format: winston.format.simple()
        }));
    }

   }


	static addLogging () { 
		winston.add(winston.transports.Logstash, {
          port: 28777,
          node_name: 'my node name',
          host: '127.0.0.1'
        });

	}
}
export default Logger