const stream = require('stream');
const fs = require("fs");

function funcReadbleStream(input) {
    if (fs.existsSync(input)) {      
        return fs.createReadStream(input, "utf8");
    } else if (input === undefined) {
        process.stdout.write('Enter a text...\n');
        return process.stdin;
    }
    else {
        process.stderr.write('You entered an invalid input file name.\n');
        return process.exit(1);
    }
}

module.exports = { funcReadbleStream };