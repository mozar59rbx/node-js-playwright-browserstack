
const { expect, test, page } = require('@playwright/test');

const homeUrl = ""

async function acceptPopupCookies(page) {
  await test.step("Popup: Cookies", async () => {
      await page.click('//span[contains(text(),"Accepter")]');
  });  

}

module.exports = {
  acceptPopupCookies,
};