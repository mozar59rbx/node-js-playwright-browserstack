
const { expect, test, page } = require('@playwright/test');

async function setStatutMarital(page) {
  await test.step("Etape: Statut marital", async () => {
    await page.click("//div[@id='maritalStatus-code']");
    await page.click("//li[@id='maritalStatus-code-2']");
    await page.click("//button[@type='submit']");
  });  

}
module.exports = {
  setStatutMarital,
};