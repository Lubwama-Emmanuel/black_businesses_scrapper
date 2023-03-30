const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const { appendToFile } = require("../helpers/createFile");
const { matchEmail } = require("../helpers/regexFile");

const obj = new Object();

const getEmails = async (url) => {
  let validEmail;
  try {
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);

    $("a").each(function () {
      const link = $(this).attr("href");
      const email = matchEmail(link);
      if (email) {
        validEmail = email;
        // console.log(email);
      }
    });
  } catch (err) {
    // console.log("AN ERROR:", err.stack);
  }
  return validEmail;
};

const blacks = fs.readFileSync("../files/final.txt", "utf-8");
const cleanBlacks = blacks.split("\n");

(async () => {
  for (let i = 0; i <= cleanBlacks.length; i++) {
    const obj = JSON.parse(cleanBlacks[i]);
    const url = obj.Business_Website;
    const email = await getEmails(url);

    if (email) {
      obj.Email = email.toLowerCase();
      appendToFile("final2.txt", JSON.stringify(obj));
      console.log(i, obj);
    }

    // console.log(email);
    //   console.log(JSON.parse(cleanBlacks[i]).Business_Website);
  }
})();
