const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('what is the filename?', (filename) => {
    console.log('confirmed');
    rl.close();
})