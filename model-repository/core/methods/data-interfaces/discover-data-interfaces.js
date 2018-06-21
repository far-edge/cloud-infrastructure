const Promise = require('bluebird');

const DataInterface = require('../../models/data-interface');
const logger = require('../../common/loggers').get('DATA-INTERFACES');

// Searches for data interfaces.
const discoverDataInterfaces = (input) => {
  logger.debug('Discover data interfaces.');
  return Promise.try(() => {
    // Find the data interfaces that match the given criteria.
    return DataInterface.find({
      ...(input.id ? { _id: input.id } : { }),
      ...(input.name ? { name: input.name } : { }),
      ...(input.description ? { description: input.description } : { }),
      ...(input.communicationProtocol ? {
        communicationProtocol: input.communicationProtocol
      } : { })
    });
  }).then((dataInterfaces) => {
    logger.debug('Discovered data interfaces.');
    return { dataInterfaces };
  }).catch((error) => {
    logger.error('Failed to discover data interfaces.', error);
    throw error;
  });
};

module.exports = discoverDataInterfaces;
