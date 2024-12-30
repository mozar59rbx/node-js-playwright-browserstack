
const { expect, test, page } = require('@playwright/test');


async function setAdresse(page, adresse, zipcode, rent, movingDate) {
  await test.step("Etape: Adresse de résidence", async () => {
    await page.fill("//input[@id='street']", adresse);
    await page.fill("//input[@id='zipcode']", zipcode);
    await page.click("//div[@id='housing-type']");
    await page.click("//li[contains(text(),'Propriétaire avec prêt(s) en cours')]");
    await page.fill("//input[@id='rent']", rent);
    await page.fill("//input[@id='moving-in-date']", movingDate);
    await page.click("//button[@class='btn btn-stretch']"); // bouton continuer
  });  

}

module.exports = {
  setAdresse,
};