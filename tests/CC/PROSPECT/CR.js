const { expect, test } = require('@playwright/test');
const percySnapshot = require('@percy/playwright');
const { fetchLatestMFA } = require('../../../api/getMyMFA');
const { simulation, fastSimulation} = require('../../../pages/Simulation');
const { coordonees, setInfos} = require('./../../../pages/Coordonees');
const { pdg, nextPedagogieId} = require('../../../pages/Pedagogie');
const { id, selectPasseport,selectCI,uploadDoc,confirmLieuNaissance} = require('../../../pages/Identite');
const { statusMarital, setStatutMarital} = require('../../../pages/StatutMarital');
const { linxo, connectLinxoAccount,selectFirstAccount } = require('../../../pages/Linxo');
const { csp, setCsp } = require('../../../pages/Csp');
const { adresse, setAdresse } = require('../../../pages/Adresse');
const { assurance, setAssurance } = require('../../../pages/Assurance');
const { home, acceptPopupCookies } = require('../../../pages/Home');
const { recap, acceptRecapitulatifInfos,acceptRecapitulatifFinancement } = require('../../../pages/Recapitulatif');
const { noticeSE, acceptNoticeSE } = require('../../../pages/NoticeSE');



test('CR -3000e avec carte et avec assurance', async ({ page, context }) => {
  await page.goto('https://recette.esigate.sofinco.fr/parcours-simulateur',{timeout: 60000});
  await acceptPopupCookies(page)
  await fastSimulation(page,"2000")
  await setInfos(page,"0722332255","01/06/1995")
  await nextPedagogieId(page)
  await selectPasseport(page)
  await uploadDoc(page,"Passeport.pdf")
  await confirmLieuNaissance(page,"FRANCE", "LILLE")
  await setStatutMarital(page)
  await connectLinxoAccount(page, "ESSENTIEL_OK_2")
  await selectFirstAccount(page)
  await setCsp(page,"10000", "01/2020")
  await setAdresse(page, "5 RUE DE DOUAI", "59000", "500", "01/2020")
  await setAssurance(page,"recommandée")
  await acceptRecapitulatifInfos(page)
  await acceptRecapitulatifFinancement(page)
  await acceptNoticeSE(page)
});