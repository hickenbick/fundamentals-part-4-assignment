const calculator = {
  add: function(n0, n1) {
    return +n0 + +n1;
  },
  
  subtract: function(num1, num2) {
    return num1 - num2  
  },
  
  sum: function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
    sum += +arr[i];
    return sum;
  },
  
  multiply: function(arr) {
    let multiply = 1
    for (let i = 0; i < arr.length; i++) {
      multiply *= arr[i]
    }
    return multiply
  },
  
  power: function(n0, n1) {
    return (+n0) ** (+n1)
  },
  
  factorial: function fac(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * fac(num - 1));
    }
  },
}

// Running tests:

// add tests:
console.log(calculator.add(0,0)); // ok
console.log(calculator.add(2,2)); // ok 
console.log(calculator.add(2,6));  // ok

// subtraction test:
console.log(calculator.subtract(10,4)); // ok

// sum with arrays tests:
console.log(calculator.sum([])); // ok
console.log(calculator.sum([7,11])); // ok
console.log(calculator.sum([1,3,5,7,9])); // ok

// multiply arrays tests:
console.log(calculator.multiply([2,4])); // ok
console.log(calculator.multiply([2,4,6,8,10,12,14])); // ok

// power test:
console.log(calculator.power(4,3)); // ok

// factorial test
console.log(calculator.factorial(0)); // ok
console.log(calculator.factorial(1)); // ok
console.log(calculator.factorial(2)); // ok
console.log(calculator.factorial(5)); // ok
console.log(calculator.factorial(10)); // ok

// Do not edit below this line
// module.exports = {
//   add,
//   subtract,
//   sum,
//   multiply,
//   power,
//   factorial
// };
