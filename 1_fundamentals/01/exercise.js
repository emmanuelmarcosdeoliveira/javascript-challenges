//! variáveis
let tempCelsius = 30;
let tempFahrenheit = 86;
convertF = (tempCelsius * 9) / 5 + 32;
convertC = ((tempFahrenheit - 32) * 5) / 9;

//! Funções
function convFahrenheit(tempCelsius) {
  return convertF;
}
console.log(convFahrenheit());

function convCelsius(tempFahrenheit) {
  return convertC;
}
console.log(convCelsius());
