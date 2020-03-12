const request = require("request");
const { URL } = require("./constance");

const arg = process.argv[2];
const breedFetcher = arg => {
  request(`${URL}${arg}`, (err, response, body) => {
    if (err) throw err;
    // console.log(response && response.statusCode)
    const data = JSON.parse(body);
    data.length !== 0
      ? console.log(data)
      : console.log("Sorry, breed not found");
  });
};

breedFetcher(arg);
