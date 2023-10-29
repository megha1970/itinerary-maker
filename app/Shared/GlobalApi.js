const { default: axios } = require("axios");

const getGooglePlace = (type) =>
  axios.get(
    "/api/places-api?" +
      "location=26.8408949%2C75.5630262&radius=1500&type=" +
      type +
      "&key=AIzaSyCWfrdPNtGhAop5KVbOmk23b4G9QCrKOJ0"
  );

const revGeocoding = (location) =>
  axios.get(
    "/api/rev-geo?" +
      "location=" +
      location +
      "&key=AIzaSyCWfrdPNtGhAop5KVbOmk23b4G9QCrKOJ0"
  );

const autoComplete = ({ input }) =>
  axios.get(
    "/api/autocomplete-api?" +
      "input=" +
      input +
      "&key=AIzaSyCWfrdPNtGhAop5KVbOmk23b4G9QCrKOJ0"
  );
const x = 0;
export default { getGooglePlace, revGeocoding, autoComplete };
