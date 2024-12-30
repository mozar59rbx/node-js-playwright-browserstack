
const { expect, test, page } = require('@playwright/test');
const today = new Date();
const formattedDate = today.toISOString().split('T')[0].replace(/-/g, '_');

async function connectLinxoAccount(page, fichier) {
  await test.step("Etape: Connexion banque Linxo", async () => {
    await page.click("//*[contains(text(),'Suivant')]");
    await page.fill("//div[contains(@class,'search-input')]/input", "Linxo");
    await page.click("//span[@class='bank__name']");
    await page.click("//button[@type='submit']");
    await page.fill("//input[@id='login']", "dev");
    await page.fill("//input[@id='password']", "dev");
    //await page.fill("//input[@id='file_url']", "https://linxo-test-bank.s3.amazonaws.com/B2B/QyHEv57N954fehyc22/" + formattedDate + "/" + fichier + ".txt");
    await page.fill("//input[@id='file_url']","https://linxo-test-bank.s3.amazonaws.com/B2B/QyHEv57N954fehyc22/2024_11_18/ESSENTIEL_OK_RENFORT_1.txt")
    await page.waitForTimeout(1000);
    await page.keyboard.press('Enter');
    //await page.click("//input[@id='btn-login']",{force: true});
  });  
}

async function selectFirstAccount(page) {
  await test.step("Etape: Sélection compte RIB", async () => {

  });  
}

module.exports = {
  connectLinxoAccount,selectFirstAccount,
};