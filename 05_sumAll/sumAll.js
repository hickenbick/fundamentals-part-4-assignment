const sumAll = function(num1, num2) {
  if( num1 > -1 && num2 > -1 && typeof num1 === "number" && typeof num2 === "number") {
    let start = Math.min(num1, num2)
    let finish = Math.max(num1, num2)
    let result = 0;
  for ( i = start ; i < finish + 1; i++) {
    result += i;
  }
  // console.log(result)
  return result
  } 
  else {
  // console.log("ERROR")
  return "ERROR"
  }
};

// Do not edit below this line
module.exports = sumAll;

(sumAll(10, 4))
