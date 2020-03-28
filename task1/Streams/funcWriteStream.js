const stream = require('stream');
const fs = require("fs");

function funcWriteStream(output) {
    if (fs.existsSync(output)) {
        return fs.createWriteStream(output, { flags: 'a' });
    } else if (output === undefined) {
        return process.stdout;
    }
    else {
        process.stderr.write('You entered an invalid output file name.\n');
        return process.exit(1);
    }
}

module.exports = { funcWriteStream };