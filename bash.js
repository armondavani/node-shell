const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const inputArr = data.toString().trim().split(' ');

  if (inputArr[0] === 'pwd') {
    pwd();
  }
  if (inputArr[0] === 'ls') {
    ls();
  }

  if (inputArr[0] === 'cat') {
    cat(inputArr[1]);
  }


});
