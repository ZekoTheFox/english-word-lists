const fs = require('fs');

const theFile = fs.readFileSync('./words_beta.txt', { encoding: 'utf-8' });
const splitFile = theFile.split('\n');

const words = [];
splitFile.forEach((word) => {
    const wordFirst = word.trim();
    if (wordFirst.length >= 4 && wordFirst.length <= 9)
      words.push(wordFirst);
});

console.log(words);
fs.writeFileSync('./exp_words_beta.txt', words.join('\n'));