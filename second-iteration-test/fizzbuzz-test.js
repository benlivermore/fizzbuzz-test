const fizzbuzz = require('./fizzbuzz');

let result = fizzbuzz(1);
if(fizzbuzz(1) === 1) {
  console.log('Passed test');
} else {
  console.log('Failed test');
}

result = fizzbuzz(2);
if(result === 2) {
  console.log('Passed test'); 
} else {
  console.log('Failed test');
}

result = fizzbuzz(3);
if(result === "fizz") {
  console.log('Passed test');
} else {
  console.log('Failed test');
}