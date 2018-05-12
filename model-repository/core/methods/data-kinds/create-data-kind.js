const Promise = require('bluebird');

const DataKind = require('../../models/data-kind');
const common = require('./common');
const logger = require('../../common/loggers').get('DATA-KINDS');

// Creates a data kind.
const createDataKind = (input) => {
  logger.debug('Create a data kind.');
  return Promise.try(() => {
    // Create the data kind.
    const dataKind = new DataKind(input);
    // Validate the data kind.
    return common.validateDataKind(dataKind);
  }).then((dataKind) => {
    // Save the data kind.
    return dataKind.save();
  }).then((dataKind) => {
    logger.debug(`Created data kind ${ dataKind._id }.`);
    return dataKind;
  }).catch((error) => {
    logger.error('Failed to create a data kind.', error);
    throw error;
  });
};

module.exports = createDataKind;
