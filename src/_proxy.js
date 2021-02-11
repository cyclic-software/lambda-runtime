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



// axios.get('/api/xyz/abcd')
//   .catch(function (error) {
//     if (error.response) {
//       // Request made and server responded
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       // The request was made but no response was received
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log('Error', error.message);
//     }

//   });
