const { breedFetcher } = require("./breedFetcher");

const arg = process.argv[2];

breedFetcher(arg, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log(desc);
  }
});
