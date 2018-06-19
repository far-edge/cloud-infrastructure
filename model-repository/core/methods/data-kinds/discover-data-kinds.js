const Promise = require('bluebird');

const DataKind = require('../../models/data-kind');
const logger = require('../../common/loggers').get('DATA-KINDS');

// Searches for data kinds.
const discoverDataKinds = (input) => {
  logger.debug('Discover data kinds.');
  return Promise.try(() => {
    // Find the data kinds that match the given criteria.
    return DataKind.find({
      ...(input.id ? { _id: input.id } : { }),
      ...(input.name ? { name: input.name } : { }),
      ...(input.description ? { description: input.description } : { }),
      ...(input.modelType ? { modelType: input.modelType } : { }),
      ...(input.format ? { format: input.format } : { }),
      ...(input.quantityKind ? { quantityKind: input.quantityKind } : { })
    });
  }).then((dataKinds) => {
    logger.debug('Discovered data kinds.');
    return { dataKinds };
  }).catch((error) => {
    logger.error('Failed to discover data kinds.', error);
    throw error;
  });
};

module.exports = discoverDataKinds;
