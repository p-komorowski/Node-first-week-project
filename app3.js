const fs = require('fs');
let files = ['1.txt', '2.txt', '3.txt'];
let sum = 0;
for (let i = 0; i < files.length; i += 1) {
  let contents = fs.readFileSync(files[i], 'utf8');
  let numbers = contents.split('\n');
  for (let j = 0; j < numbers.length; j += 1) {
    sum += parseInt(numbers[j]);
  }
}
console.log(sum);

// solution which doesn't need setTimeout
