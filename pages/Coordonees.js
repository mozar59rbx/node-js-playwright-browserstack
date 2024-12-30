
const { expect, test, page } = require('@playwright/test');
var mailrandom = "random"+Date.now()+"@test-auto.fr"

async function setInfos(page,tel,dateNaissance) {
  await test.step("Etape: Coordonnées", async () => {
    await page.fill("//input[@id='input-email']", mailrandom+"");
    await page.fill("//input[@id='input-telephone']", tel);
    await page.fill("//*[@id = 'birthDate']", dateNaissance);
    await page.click('body');
    await page.click("//button[@type='submit']");
  });  
  await test.step('Etape: Recevez nos offres et bons plans', async () => {
    await page.click("//button[@type='submit']",{force: true});
  });

}

module.exports = {
  setInfos,
};