const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const { appendToFile } = require("../helpers/createFile");

const getWebLinks = async (url) => {
  try {
    let businessWebsite;
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);

    businessWebsite = $("a.adOvj").attr("href");
    console.log(businessWebsite);

    appendToFile("../files/webLinks.txt", businessWebsite);
  } catch (err) {
    console.log("AN ERROR:", err.stack);
  }
};

const blacks = fs.readFileSync("../files/output.txt", "utf-8");
const cleanBlacks = blacks.split("\n");

for (let i = 0; i <= 20; i++) {
  getWebLinks(cleanBlacks[i]);
}
