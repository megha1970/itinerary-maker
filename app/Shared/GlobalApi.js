const { default: axios } = require("axios");

const getGooglePlace = (type) =>
  axios.get(
    "/api/google-place?" +
      "location=26.8408949%2C75.5630262&radius=1500&type=" +
      type +
      "&key=AIzaSyCWfrdPNtGhAop5KVbOmk23b4G9QCrKOJ0"
  );

export default { getGooglePlace };
