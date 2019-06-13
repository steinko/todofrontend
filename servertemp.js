const express = require('express')
const path = require('path')
var winston = require( 'winston' );
require('winston-daily-rotate-file');
const config = require('dotenv').config()
const app = express()


//Set loggineg files
var infoFilename =  path.join(__dirname,'logs', 'logfile.log');
var errorFilename = path.join(__dirname,'logs', 'errorfile.log');
app.use(express.static(path.join(__dirname, 'build')));

var transportInfo = new (winston.transports.DailyRotateFile)
({
  name:"infofile",
  filename: infoFilename,
  datePattern: 'yyyy-MM-dd.',
  prepend: true,
  level:'info',
});

//Filter error messages from log
var transportError = new (winston.transports.DailyRotateFile)({
  name:"errorfile",
  filename: errorFilename,
  datePattern: 'yyyy-MM-dd.',
  prepend: true,
  level: 'error'
});

var logger = new (winston.Logger)({
  transports: [
    transportInfo, transportError
  ]
});

app.get(['/','/welcome' ], function(req, res) {
  console.info('/*')
  //logger.info('get / ,/welcom')
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/backendUrl', function(req, res) {
  try {
  console.info('/serverUrl')
  console.info(process.env.REACT_APP_SERVER_URL)

  //logger.info('/serverUrl')
 // logger.info(process.env.REACT_APP_SERVER_URL)

  const env = { 
                 serverUrl:  process.env.REACT_APP_SERVER_URL,
                 env: process.env.NODE_ENV
              }

  res.send(JSON.stringify(env))
  }catch(error) { 
    console.error(error)
    logger.error(error)
  }
})


app.listen(process.env.PORT, (error) => { 
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on", process.env.PORT, process.env.PORT)
  } 
});


