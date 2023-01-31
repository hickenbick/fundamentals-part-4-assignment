const convertToCelsius = function(f) {
  let c = ((f - 32) / 1.800)
  return round(c, 1)
};

const convertToFahrenheit = function(c) {
  let f = c * (9/5) +32;
  return round(f, 1) 
};

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
