const axios = require("axios");

axios.interceptors.request.use(
  function(config) {
    console.log("in request interceptor (success)");
    return config;
  },
  function(error) {
    // Do something with request error
    console.log("in request interceptor (error)");
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    console.log("in response interceptor (success)");
    return response;
  },
  function(error) {
    // Do something with response error
    console.log("in response interceptor (error)");
    return Promise.reject(error);
  }
);
