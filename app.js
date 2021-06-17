const fs = require('fs');
let sum = 0;
fs.readFile('1.txt', function (err, data) {
  if (err) throw err;
  let array = data.toString().split('\n');
  for (i in array) {
    sum += parseInt(array[i]);
  }
});
fs.readFile('2.txt', function (err, data) {
  if (err) throw err;
  let array = data.toString().split('\n');
  for (i in array) {
    sum += parseInt(array[i]);
  }
});
fs.readFile('3.txt', function (err, data) {
  if (err) throw err;
  let array = data.toString().split('\n');
  for (i in array) {
    sum += parseInt(array[i]);
  }
});
function drukowanie() {
  console.log(sum);
}
setTimeout(drukowanie, 3);

// using SetTimeout to add all digits. Before code was starting from random place and result was not correct.
