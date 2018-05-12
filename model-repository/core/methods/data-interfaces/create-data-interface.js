const Promise = require('bluebird');

const DataInterface = require('../../models/data-interface');
const common = require('./common');
const logger = require('../../common/loggers').get('DATA-INTERFACES');

// Creates a data interface.
const createDataInterface = (input) => {
  logger.debug('Create a data interface.');
  return Promise.try(() => {
    // Create the data interface.
    const dataInterface = new DataInterface(input);
    // Validate the data interface.
    return common.validateDataInterface(dataInterface);
  }).then((dataInterface) => {
    // Save the data interface.
    return dataInterface.save();
  }).then((dataInterface) => {
    logger.debug(`Created data interface ${ dataInterface._id }.`);
    return dataInterface;
  }).catch((error) => {
    logger.error('Failed to create a data interface.', error);
    throw error;
  });
};

module.exports = createDataInterface;
