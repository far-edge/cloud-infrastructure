const Promise = require('bluebird');

const DataKind = require('../../models/data-kind');
const logger = require('../../common/loggers').get('DATA-KINDS');

// Searches for data kinds.
const searchhDataKinds = (input) => {
  logger.debug('Search for data kinds.');
  return Promise.try(() => {
    // Find the data kinds that match the given criteria.
    return DataKind.find({
      ...(input.name ? { name: input.name } : { }),
      ...(input.description ? { description: input.description } : { }),
      ...(input.modelType ? { modelType: input.modelType } : { }),
      ...(input.format ? { format: input.format } : { }),
      ...(input.quantityKind ? { quantityKind: input.quantityKind } : { })
    });
  }).then((dataKinds) => {
    logger.debug('Searched for data kinds.');
    return { dataKinds };
  }).catch((error) => {
    logger.error('Failed to search for data kinds.', error);
    throw error;
  });
};

module.exports = searchhDataKinds;
