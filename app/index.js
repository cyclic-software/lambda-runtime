const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const PORT = 3000

// Accept both form and json encoded bodies
app.use(bodyParser.urlencoded({extended: false})); // application/x-www-form-urlencoded
app.use(bodyParser.json()); // application/json

app.all('/error', async (req,res) => {
  console.log(`express called with ${req.method}:${req.path} ... ${JSON.stringify(req.headers)}`)

  res.statusCode = req.body.statusCode || 404
  res.json({
    method: req.method,
    path: req.path,
    headers: req.headers,
    message: "Triggering 404 status response",
  })
})

app.all('*', async (req, res) => {
  console.log(`express called with ${req.method}:${req.path} ... ${JSON.stringify(req.headers)}`)
  res.json({
    method: req.method,
    path: req.path,
    headers: req.headers,
    message: "response from default echo in gh:/cyclic-software/lambda-runtime/app/index.js",
    now:  new Date().toISOString()
  })
})

app.listen(PORT, ()=>{
  console.log('server started')
})
