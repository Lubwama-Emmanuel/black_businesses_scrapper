const axios = require("axios");
const cheerio = require("cheerio");
const { appendToFile } = require("../helpers/createFile");
const CronJob = require("cron").CronJob;
const fs = require("fs");

const myBlackScrapper = async (url) => {
  try {
    const obj = new Object();
    let businessName;
    let phoneNumber;
    let mainAddress;
    let businessWebsite;
    const servicesOffered = [];
    const response = await axios(url);
    const html = response.data;

    const $ = cheerio.load(html);
    businessName = $("h1").text();
    phoneNumber = $("a._3oDJW").text();
    businessWebsite = $("a.adOvj").attr("href");
    mainAddress = $("p._2341A").text();

    $("div._3yDRU").each(function () {
      const service = $(this).text();
      servicesOffered.push(service);
    });

    obj.Business_Name = businessName;
    obj.Phone_Number = phoneNumber;
    obj.Main_Address = mainAddress;
    obj.Business_Website = businessWebsite;
    obj.Services_Offered = servicesOffered;

    console.log(obj);
    appendToFile("../files/final.txt", JSON.stringify(obj));
  } catch (err) {
    console.log(err.stack);
  }
};

const buss = fs.readFileSync("../files/output.txt", "utf-8");
const businesses = buss.split("\n");
for (let i = 0; i <= 4271; i++) {
  myBlackScrapper(businesses[i]);
}
// const job = new CronJob("*/10 * * * *", function () {
//   for (let i = 0; i <= 4271; i++) {
//     myBlackScrapper(businesses[i]);
//   }
// });

// job.start();
