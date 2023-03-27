// Cleans the output.txt file to remove duplicate records
const fs = require("fs")

// Read file content
const fileContent = fs.readFileSync("../files/output.txt", "utf-8")

// Convert into an array
const fileContentFilter = fileContent.split("\n")

// Remove duplicates
const filteredContent = fileContentFilter.filter((value, index) => fileContentFilter.indexOf(value) == index )

// Write back to file
fs.writeFileSync("../files/output.txt", filteredContent.join("\n"))
