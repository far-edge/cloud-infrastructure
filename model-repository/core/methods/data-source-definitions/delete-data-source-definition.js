const Promise = require('bluebird');

const DataSourceDefinition = require('../../models/data-source-definition');
const errors = require('../../common/errors');
const logger = require('../../common/loggers').get('DATA-SOURCE-DEFINITIONS');

// Deletes a data source definition.
const deleteDataSourceDefinition = (input) => {
  logger.debug(`Delete data source definition ${ input.id }.`);
  return Promise.try(() => {
    // Find the data source definition with the given ID.
    return DataSourceDefinition.findById(input.id);
  }).then((dataSourceDefinition) => {
    // The data source definition does not exist.
    if (!dataSourceDefinition) {
      logger.error(`Data source definition ${ input.id } does not exist.`);
      throw new errors.NotFoundError('DATA_SOURCE_DEFINITION_NOT_FOUND');
    }
    // Delete the data source definition.
    return dataSourceDefinition.remove();
  }).then((_dataSourceDefinition) => {
    logger.debug(`Deleted data source definition ${ input.id }.`);
    return null;
  }).catch((error) => {
    logger.error(`Failed to delete data source definition ${ input.id }.`, error);
    throw error;
  });
};

module.exports = deleteDataSourceDefinition;
