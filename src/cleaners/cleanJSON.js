// Cleans JSon to remove duplicates
const fs = require("fs");

// Read file content
const fileContent = fs.readFileSync("../files/final2.txt", "utf-8");

// Convert into an array
const filecontentArray = fileContent.split("\n");

// Remove duolicates
const filtered = filecontentArray.filter(
  (value, index) => filecontentArray.indexOf(value) == index
);

console.log(filtered);

// Write file back
fs.writeFileSync("../files/final2.txt", filtered.join("\n"));
