import axios from 'axios';


export default {

  getDogs: function () {
    const options = {
      url: 'https://dog.ceo/api/breeds/list/all',
      method: 'GET',
    };

    return axios(options)
  },

  getDogImage: function (dogname) {
    const options = {
      url: `https://dog.ceo//api/breed/${dogname}/images`,
      method: 'GET',
    };

    return axios(options)

  }




};

