const express = require('express')
const app = express()

const PORT = 3000

app.all('*', async (req, res) => {
  console.log(`express called with ${req.method}:${req.path}`)
  res.json({
    method: req.method,
    path: req.path,
    now:  new Date().toISOString()
  })
})

app.listen(PORT, ()=>{
  console.log('server started')
})

// console.log("hello world")
// setTimeout(()=>{
//   console.log("Done")
// },5000)

// exports.handler = async function(event, context) {
//   console.log(`Event recieved: ${JSON.stringify(event)}`)
//   console.log(`process.env: ${JSON.stringify(process.env)}`)
//   return process.env
// }

// exports.handler({name: "event.name"},{"context":"this is the context"})

// AWS_LAMBDA_RUNTIME_API
