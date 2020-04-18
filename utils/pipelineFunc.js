const { pipeline } = require('stream');

function pipelineFunc(readableStream, transform, writeableStream) {
    pipeline(
        readableStream,
        transform,
        writeableStream,
        (err) => {
            if (err) {
                console.error('Failed.', err);
            } else {
                console.log('Succeeded.');
            }
        }
    )
}

module.exports = { pipelineFunc };