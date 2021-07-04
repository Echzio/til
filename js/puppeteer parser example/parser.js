const fs = require("fs");
const puppeteer = require("puppeteer");

async function launch() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://europaplus.ru/brigadau", { waitUntil: "load" });
  await page.waitForSelector(".horoscope-card.gallery__slide");
  const value = await page.evaluate(() => {
    const slides = [
      ...document.querySelectorAll(".horoscope-card.gallery__slide"),
    ].map((item) => ({
      name: item.querySelector(".horoscope-card__name").textContent,
      description: item.querySelector(".horoscope-card__forecast").textContent,
    }));
    return slides;
  });
  write(value);
  browser.close();
}

launch();

function write(slides) {
  fs.appendFile("horoskop.json", JSON.stringify(slides), (err) => {
    if (err) throw err;
    console.log("done");
  });
}
