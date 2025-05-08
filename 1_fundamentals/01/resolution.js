const celsius = 30;
const farenheight = 86;

function celsiusToFarenheight(celsius) {
  return (celsius * 9) / 5 + 32;
}

function farenheightToCelsius(farenheight) {
  return ((farenheight - 32) * 5) / 9;
}

console.log(
  `A temperatura de ${celsius}°Celsius é equivalente a ${celsiusToFarenheight(
    30
  )}° graus farenheight `
);

console.log(
  `A temperatura de ${farenheight}°farenheight é equivalente a ${farenheightToCelsius(
    86
  )}° graus Celsius `
);
