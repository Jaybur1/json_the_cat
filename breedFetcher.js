const request = require("request");
const { URL } = require("./constance");

const breedFetcher = (arg, cb) => {
  request(`${URL}${arg}`, (err, response, body) => {
    const data = JSON.parse(body);
    const notFound = "Sorry, breed not found";
    return data.length !== 0 ? cb(err, data[0].description) : cb(err, notFound);
  });
};

module.exports = { breedFetcher };
