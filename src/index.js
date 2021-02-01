const express = require('express')
const app = express()

const PORT = 3000

app.all('*', async (req, res) => {
  console.log(`express called with ${req.method}:${req.path} ... ${JSON.stringify(req.headers)}`)
  res.json({
    method: req.method,
    path: req.path,
    headers: req.headers,
    now:  new Date().toISOString()
  })
})

app.listen(PORT, ()=>{
  console.log('server started')
})
