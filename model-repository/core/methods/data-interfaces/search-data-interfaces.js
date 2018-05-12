const Promise = require('bluebird');

const DataInterface = require('../../models/data-interface');
const logger = require('../../common/loggers').get('DATA-INTERFACES');

// Searches for data interfaces.
const searchhDataInterfaces = (input) => {
  logger.debug('Search for data interfaces.');
  return Promise.try(() => {
    // Find the data interfaces that match the given criteria.
    return DataInterface.find({
      ...(input.name ? { name: input.name } : { }),
      ...(input.communicationProtocol ? {
        communicationProtocol: input.communicationProtocol
      } : { })
    });
  }).then((dataInterfaces) => {
    logger.debug('Searched for data interfaces.');
    return { dataInterfaces };
  }).catch((error) => {
    logger.error('Failed to search for data interfaces.', error);
    throw error;
  });
};

module.exports = searchhDataInterfaces;
