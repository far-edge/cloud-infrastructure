const Promise = require('bluebird');

const DataSourceDefinition = require('../../models/data-source-definition');
const logger = require('../../common/loggers').get('DATA-SOURCE-DEFINITIONS');

// Discover data source definitions.
const discoverDataSourceDefinitions = (input) => {
  logger.debug('Discover data source definitions.');
  return Promise.try(() => {
    // Find the data source definitions that match the given criteria.
    return DataSourceDefinition.find({
      ...(input.id ? { _id: input.id } : { }),
      ...(input.name ? { name: input.name } : { }),
      ...(input.dataInterfaceReferenceID ? {
        dataInterfaceReferenceID: input.dataInterfaceReferenceID
      } : { }),
      ...(input.dataKindReferenceID ? {
        'dataKindReferenceIDs.dataKindReferenceID': input.dataKindReferenceID
      } : { })
    });
  }).then((dataSourceDefinitions) => {
    logger.debug('Discovered data source definitions.');
    return { dataSourceDefinitions };
  }).catch((error) => {
    logger.error('Failed to discover data source definitions.', error);
    throw error;
  });
};

module.exports = discoverDataSourceDefinitions;
