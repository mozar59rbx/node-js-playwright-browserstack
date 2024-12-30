
const { expect, test, page } = require('@playwright/test');


async function selectPasseport(page) {
  await test.step('Etape: Type de document', async () => {
    await page.click("//*[contains(text(),'Suivant')]",{force: true});
    await page.click("//span[contains(text(),'Passeport')]");
    await page.click("//button[contains(text(),'Ok')]");
  });
}

async function selectCI(page) {
  await test.step('Etape: Type de document', async () => {
    await page.click("//*[contains(text(),'Suivant')]",{force: true});
    await page.click("//span[contains(text(),'Carte Nationale d'Identité')]");
    await page.click("//button[contains(text(),'Ok')]");
  });
}
async function uploadDoc(page,doc) {
  await test.step('Etape: Upload de document', async () => {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator("input[id='passport']").click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('datas/'+doc);
    await page.click("//button[@type='submit']");
  });
}
async function confirmLieuNaissance(page,pays, ville) {
  await test.step('Etape: Confirmation Lieu de naissance', async () => {

    await page.fill("//input[@id='birth-country']", pays);
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.click('body');

    await page.fill("//*[@id = 'birth-city']", ville);
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    await page.click("//button[@type='submit']");
  });
}
module.exports = {
  selectPasseport,selectCI,uploadDoc,confirmLieuNaissance,
};