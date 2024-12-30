
const { expect, test, page } = require('@playwright/test');


async function acceptRecapitulatifInfos(page) {
  await test.step("Etape: Recapitulatif informations", async () => {
    await page.click("//button[@type='submit']");
  });  
}

async function acceptRecapitulatifFinancement(page) {
  await test.step("Etape: Recapitulatif financement", async () => {
    await page.click("//div[@class='checkbox-frame']");
    await page.click("//button[@type='submit']");
  });  
}

module.exports = {
  acceptRecapitulatifInfos,acceptRecapitulatifFinancement,
};