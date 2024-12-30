async function generateRandomEmail() {
  const timestamp = Date.now(); // Timestamp en millisecondes depuis l'époque Unix

    return "testauto" +timestamp + "@sofinco.fr"
  }


  module.exports = {
    generateRandomEmail,
  };