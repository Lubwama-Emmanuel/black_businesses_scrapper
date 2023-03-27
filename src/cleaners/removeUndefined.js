const fs = require("fs");

const fileContent = fs.readFileSync("test.txt", "utf-8");

const filecontentArray = fileContent.split("\n");

const filtered = filecontentArray.filter((el) => {
  return (
    JSON.parse(el).Home_Address != "undefined, undefined, undefined, undefined"
  );
});

// console.log(filtered);
fs.writeFileSync("test.txt", filtered.join("\n"));
