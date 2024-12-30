const { request } = require('playwright');

/**
 * Fonction statique pour appeler l'API.
 * @returns {Promise<Object>} La réponse JSON de l'API.
 */
async function fetchLatestMFA() {
  const apiUrl = 'https://programmatic-api.client.get.mymfa.io/v1/phone_01j517yraekzatvsj9k06jjf86/mfa/latest';
  const apiKey = 'oQV1sTYaL25VXamyrN4xm7k0HHOd1yhJ7dYgRWzp';

  try {
    // Crée un contexte de requête (pas besoin de navigateur ici)
    const context = await request.newContext();

    // Effectue la requête GET
    const response = await context.get(apiUrl, {
      headers: {
        'x-api-key': apiKey,
      },
    });

    // Vérifie si la requête a réussi
    if (!response.ok()) {
      throw new Error(`HTTP error! Status: ${response.status()}`);
    }

    // Parse la réponse en JSON
    const data = await response.json();
    await context.dispose(); // Nettoie le contexte après utilisation
    return data;
  } catch (error) {
    console.error('Erreur lors de l\'appel API:', error);
    throw error; // Relance l'erreur pour que les tests puissent la capturer
  }
}

module.exports = {
  fetchLatestMFA,
};

//const data = await fetchLatestMFA();
//console.log('Données reçues :', data.mfaCode);