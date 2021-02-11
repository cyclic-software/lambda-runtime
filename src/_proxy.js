const axios = require('axios').default;

require('./index')

exports.handler = async function(event, context) {
  console.log("calling the server")
  console.log(`event: ${JSON.stringify(event)}`)
  console.log(`context: ${JSON.stringify(context)}`)

  try {
    const resp = await axios({
      baseURL: "http://localhost:3000/",
      data: event.body,
      headers: event.headers,
      method: event.requestContext.http.method,
      // params: event.params,
      url: event.requestContext.http.path,
    })
    console.log(`Success response: ${JSON.stringify(resp.data)}`)

    return resp.data
    // return {
    //   "isBase64Encoded" : "false",
    //   "statusCode": "200",
    //   "headers": resp.headers,
    //   "body": resp.data
    // }
  } catch (error) {
    if (error.response) {
      console.log('Request made, error response.')
      // console.log('data: ', error.response.data);
      console.log('status: ', error.response.status);
      // console.log('headers: ', error.response.headers);

      return {
        "isBase64Encoded" : "false",
        "statusCode": error.response.status,
        "headers": error.response.headers,
        "body": JSON.stringify(error.response.data)
      }

    } else if (error.request) {
      console.log('The request was made but no response was received')
      console.log(error.request);
    } else {
      console.log('Something happened in setting up the request that triggered an Error')
      console.log('Error', error.message);
    }
  }
}
