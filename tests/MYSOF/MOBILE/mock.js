const { expect, test } = require('@playwright/test');



test('Résiliation assurance', async ({ page, context }) => {

  await context.addCookies([{
    name: 'simulationPath',      
    value: 'classic',
    domain: 'rct.mon-espace-client.sofinco.fr',        
    path: '/'
  }]);

  await page.routeFromHAR('./mockapi.har', {
    url: '*/**/rct-api.sofinco.fr/*/**/',
    update: false,
  });


  await page.goto('https://SCE_CACF_MYSOFCO:MySof&CoA21!@rct.mon-espace-client.sofinco.fr');

  await page.click('//span[contains(text(),"Accepter")]');

  await page.goto('https://rct.mon-espace-client.sofinco.fr/auth/autologin?uid=92987941558');


  await page.click('//*[contains(text(),"Utiliser du disponible")]');

  await page.click('//*[contains(text(),"Faire une simulation")]');

  await page.fill("//*[@id = 'requiredamount']", "100");

  await page.click('//*[contains(text(),"Simuler mon remboursement")]');
  await page.click("//*[@for = 'conditionsStandard']");
  await page.click("//span[contains(text(),'Voir le récapitulatif')]");
  await page.click("//*[contains(text(),'Confirmer mon choix')]");

  const confirmation = page.locator("//*[@class = 'transfertValid__title']");
  await expect(confirmation).toHaveText("Votre demande d'utilisation de 100,00 € a bien été prise en compte");



});
