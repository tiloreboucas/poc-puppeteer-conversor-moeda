const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");
async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const moedaBase =
    readlineSync.question("Qual moeda deseja converter? ") || "dolar";

  const moedaFinal = readlineSync.question("Para qual moeda? ") || "real";

  const url = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}`;

  await page.goto(url);

  const resulto = await page.evaluate(() => {
    return document.querySelector(".a61j6").value;
  });

  console.log(`1 ${moedaBase} equivale a ${resulto} ${moedaFinal}`);

  await browser.close();
}

run();
