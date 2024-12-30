
const { expect, test, page } = require('@playwright/test');


async function nextPedagogieId(page) {
  await test.step('Etape: Pédagogie', async () => {
    await page.click("//button[@type='submit']",{force: true});
    await page.click("//button[@id='story-x']");
    await page.click("//button[@class='btn btn-stretch']");
  });

}

module.exports = {
  nextPedagogieId,
};