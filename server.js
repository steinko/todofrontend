const express = require('express')
const path = require('path')
const config = require('dotenv').config()
const app = express()



app.use(express.static(path.join(__dirname, 'build')));

app.get(['/','/welcome' ], function(req, res) {
  console.info('/*')
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/backendUrl', function(req, res) {
  try {
  console.info('/serverUrl')
  console.info(process.env.REACT_APP_SERVER_URL)
  const env = { 
                 serverUrl:  process.env.REACT_APP_SERVER_URL,
                 env: process.env.NODE_ENV
              }

  res.send(JSON.stringify(env))
  }catch(error) { 
    console.error(error)
  }
})


app.listen(process.env.PORT);


