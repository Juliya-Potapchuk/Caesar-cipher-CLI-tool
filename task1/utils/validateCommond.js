const { programOptions } = require('./commander');

function validateCommond() {
    if (programOptions.shift === undefined) {
        process.stderr.write('You did not specify a shift.\n');
        process.exit(1);
    }
    if (programOptions.action === undefined) {
        process.stderr.write('You did not specify an action encode/decode.\n');
        return process.exit(1);
    }
}

module.exports = { validateCommond };
