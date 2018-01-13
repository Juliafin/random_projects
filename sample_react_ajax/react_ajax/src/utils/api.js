import axios from 'axios';

const apiCall = (endpoint, method, data=null) => {
  const options = {
    method: method,
    url: `http://localhost:8004/${endpoint}`,
    data: {
      input: data
    }
  };

  return axios(options)
    .then( (result) => {
      console.log(result, 'Result inside of axios');
    })
    .catch( (error) => {
      console.log(error, 'error inside of axios');
    });
};


export default apiCall;
