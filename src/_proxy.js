const axios = require('axios').default;

require('./index')

exports.handler = async function(event, context) {
  console.log("calling the server")
  console.log(`event: ${JSON.stringify(event)}`)
  console.log(`context: ${JSON.stringify(context)}`)
  return (
    await axios({
      baseURL: "http://localhost:3000/",
      body: event.body,
      headers: event.headers,
      method: event.method,
      params: event.params,
      url: event.path,
    })
  ).data
}

// exports.handler = async function(event, context) {
//   console.log(`Event recieved: ${JSON.stringify(event)}`)
//   console.log(`process.env: ${JSON.stringify(process.env)}`)
//   return process.env
// }
