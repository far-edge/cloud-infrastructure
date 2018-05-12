const Promise = require('bluebird');

const DataSourceDefinition = require('../../models/data-source-definition');
const logger = require('../../common/loggers').get('DATA-SOURCE-DEFINITIONS');

// Searches for data source definitions.
const searchhDataSourceDefinitions = (input) => {
  logger.debug('Search for data source definitions.');
  return Promise.try(() => {
    // Find the data source definitions that match the given criteria.
    return DataSourceDefinition.find({
      ...(input.name ? { name: input.name } : { }),
      ...(input.dataInterfaceReferenceID ? {
        dataInterfaceReferenceID: input.dataInterfaceReferenceID
      } : { }),
      ...(input.dataKindReferenceID ? {
        'dataKindReferenceIDs.dataKindReferenceID': input.dataKindReferenceID
      } : { })
    });
  }).then((dataSourceDefinitions) => {
    logger.debug('Searched for data source definitions.');
    return { dataSourceDefinitions };
  }).catch((error) => {
    logger.error('Failed to search for data source definitions.', error);
    throw error;
  });
};

module.exports = searchhDataSourceDefinitions;
