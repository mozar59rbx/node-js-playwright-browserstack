
const { expect, test, page } = require('@playwright/test');


async function setCsp(page, salaire, depuis) {
  await test.step("Etape: Catégorie socio professionnelle", async () => {
    await page.click("//div[@id='select-csp']");
    await page.click("//li[@id='select-csp-7']");
    await page.fill("//input[@id='employment-since-when']", depuis);
    await page.fill("//input[@id='salary']", salaire);
    await page.click("//button[@type='submit']");
    await page.click("//*[contains(text(),'Suivant')]");
    
  });  

}

module.exports = {
  setCsp,
};