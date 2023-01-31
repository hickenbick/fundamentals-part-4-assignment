const fibonacci = function (n) {
  let a = 0;
  b = 1;
  c = n;
 
  if ( n > -1) {
   for(let i = 2; i <= n; i++) {
     c = a + b;
     a = b; 
     b = c;
    }
    return +c;
   } else {
     return "OOPS"
   }
};

// Do not edit below this line
module.exports = fibonacci;
 

// console.log(fibonacci("1"))