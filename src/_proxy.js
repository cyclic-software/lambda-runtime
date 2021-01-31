const axios = require('axios').default;

require('./index')




exports.handler = async function(event, context) {
  console.log("calling the server")
  console.log(`event: ${JSON.stringify(event)}`)
  console.log(`context: ${JSON.stringify(context)}`)
  return (
    // await axios.(`http://localhost:3000`, {headers: {"Content-Type": "application/json"}})
    await axios({
      method: event.method,
      url: event.path,
      baseURL: "http://localhost:3000/",
      headers: event.headers,
      port: 3000
    })
  ).data
}
