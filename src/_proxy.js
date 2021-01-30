const axios = require('axios').default;

require('./index')


exports.handler = async function(event, context) {
  console.log("calling the server")
  return (await axios.get(`http://localhost:3000`, {headers: {"Content-Type": "application/json"}})).data
}
