var axios = require('axios');

axios.get("http://www.cnn.com")
  .then((response) => {
    console.log(response);
  });