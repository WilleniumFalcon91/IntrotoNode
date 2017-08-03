const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('what is the filename?', (filename) => {
    console.log(filename + ' confirmed');
    rl.close();
    fs.readFile(filename, (err, buffer) => {
        if(err) {
            console.log(err.message);
            return;
        }
        console.log('I found the file!');
        let content = buffer.toString();
        let upcased = content.toLocaleUpperCase();
        console.log(upcased);
    });
});