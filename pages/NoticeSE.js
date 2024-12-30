
const { expect, test, page } = require('@playwright/test');


async function acceptNoticeSE(page) {
  await test.step("Etape: Notice SE", async () => {
    await page.click("//div[@class='checkbox-frame']");
    await page.click("//button[@type='submit']");
  });  

}

module.exports = {
  acceptNoticeSE,
};