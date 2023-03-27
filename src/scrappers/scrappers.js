const axios = require("axios");
const cheerio = require("cheerio");
const { matchLink } = require("../helpers/regexFile");
const { appendToFile } = require("../helpers/createFile");

const scrapper = async (url) => {
  let value;
  try {
    const req = await axios.get(url);
    const html = await req.data;

    const $ = cheerio.load(html);

    $("a").each(function () {
      const link = $(this).attr("href");
      if (link != undefined) {
        //   console.log(link);
        value = matchLink(link);
      }
      appendToFile("../files/output.txt", "https://byblack.us" + value);
    });
  } catch (error) {
    console.log(error.stack);
  }
};
for (let i = 0; i <= 298; i++) {
  scrapper(
    `https://byblack.us/search/Atlanta--GA/businesses/?page=${i}&per_page=15&query=&search_type=fuzzy`
  );
}
