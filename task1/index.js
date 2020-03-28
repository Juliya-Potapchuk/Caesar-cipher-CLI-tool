const { funcReadbleStream } = require('./Streams/funcReadbleStream');
const { funcTransformStream } = require('./Streams/funcTransformStream');
const { funcWriteStream } = require('./Streams/funcWriteStream');
const { programOptions } = require('./utils/commander');
const { validateCommond } = require('./utils/validateCommond');
const { pipelineFunc } = require('./utils/pipelineFunc');

validateCommond();

const readableStream = funcReadbleStream(programOptions.input);
const transform = funcTransformStream(programOptions.shift, programOptions.action);
const writeableStream = funcWriteStream(programOptions.output);
// node index.js -s 7 -i input.txt -o output.txt -a encode

pipelineFunc(readableStream, transform, writeableStream);