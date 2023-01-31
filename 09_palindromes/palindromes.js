const palindromes = function(str) {
  let re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split("").reverse().join("")
  return reverseStr === lowRegStr
}

// console.log(palindromes("A man, a plan, a canal. Panama"));

// Do not edit below this line
module.exports = palindromes;
