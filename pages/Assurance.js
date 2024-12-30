
const { expect, test, page } = require('@playwright/test');


async function setAssurance(page, assurance) {
  await test.step("Etape: Choix de l'assurance", async () => {
    await page.click("//span[contains(text(),'Assurance recommandée')]");
    await page.click("//button[@type='submit']");
    
  });  

}

module.exports = {
  setAssurance,
};