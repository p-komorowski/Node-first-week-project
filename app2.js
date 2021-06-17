const fs = require('fs');
let sum = 0;
let j = 1;
for (j = 1; j <= 3; j++) {
  fs.readFile(j + '.txt', function (err, data) {
    if (err) throw err;
    let array = data.toString().split('\n');
    for (i in array) {
      sum += parseInt(array[i]);
    }
  });
}
function drukowanie() {
  console.log(sum);
}
setTimeout(drukowanie, 3);

//using loop to shorten the code.
