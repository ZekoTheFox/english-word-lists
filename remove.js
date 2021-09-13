const fs = require('fs');

const theFile = fs.readFileSync('./count_1w.txt', { encoding: 'utf-8' });
const splitFile = theFile.split('\n');

const tab = ' ';

const words = [];
splitFile.forEach((word) => {
    const wordFirst = word.split(tab)[0];
    const wordSecond = word.split(tab)[1];
    if (wordFirst.length > 3 && wordFirst.length < 11 && wordSecond.length > 4)
      if (wordSecond.length < 10 && parseInt(wordSecond) > 60000)
        words.push(wordFirst);
      else if (wordSecond.length > 5)
        words.push(wordFirst);
        // 1 000 000 000 / 2 147 483 647
});

console.log(words);
fs.writeFileSync('./exp_words.txt', words.join('\n'));