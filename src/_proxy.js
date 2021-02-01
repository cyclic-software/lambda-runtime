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
      method: event.requestContext.http.method,
      params: event.params,
      url: event.requestContext.http.path,
    })
  ).data
}
