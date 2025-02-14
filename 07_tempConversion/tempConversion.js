const convertToCelsius = function(degrees) {
  //(32°F − 32) × 5/9 = 0°C
  let celsius = (degrees - 32) * (5/9);
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(degrees) {
  //(32°C × 9/5) + 32 = 89.6°F
  let fahrenheit = (degrees * (9/5)) + 32;
  return Math.round(fahrenheit * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
