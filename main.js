require("./axiosConfig");
const axios = require("axios");

axios.get("http://www.google.com").then(response => {
  console.log("some response");
});
