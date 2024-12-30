
const { expect, test, page } = require('@playwright/test');
const percyScreenshot = require('@percy/playwright');


async function fastSimulation(page,montant) {
  await test.step('Etape: Type de projet', async () => {
    await page.click("//label[@for='card-FAMILY']");
    await percyScreenshot(page, "Type de projet");
    await page.click("//button[@id='next-step-button']");
    await page.click("//label[@for='FAMILY_MOVING']");
    await percyScreenshot(page, "Sous-type projet ");
    await page.click("//button[@id='next-step-button']");
  });

  await test.step('Etape: Montant du projet', async () => {
    await page.fill("//input[@id='amountModality-number']", montant);
    await page.click('body');
    await percyScreenshot(page, "Montant du projet");
    await page.click("//*[contains(text(),'Suivant')]");
  });

  await test.step("Etape: Choix de l'offre", async () => {
    await percyScreenshot(page, "Choix de l'offre 1");

    await page.click("//*[contains(text(),'Découvrir les offres')]",{force: true});
    await percyScreenshot(page, "Choix de l'offre 2");

    // Continuer avec cette offre
    await page.click("//div[@class='simu-result__mlContinue']/button[@class='button button--primary']");
    // Choisir cette offre
    await percyScreenshot(page, "Choix de l'offre 3");

    await page.click("//button[@class='button button--primary button--next']");
    await percyScreenshot(page, "Choix de l'offre 4");

    await page.click("//button[@type='submit']");
  });

  await test.step("Etape: Co-emprunteur", async () => {
    await percyScreenshot(page, "Co-emprunteur");

    await page.click("//span[contains(text(),'Seul')]");
    await page.click("//button[@type='submit']");
  }); 

}

module.exports = {
  fastSimulation,
};