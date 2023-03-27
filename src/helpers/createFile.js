const fs = require("fs");
exports.appendToFile = (filename, value) => {
  try {
    fs.appendFileSync(filename, value + "\n");
  } catch (error) {
    console.log(error);
  }
};
