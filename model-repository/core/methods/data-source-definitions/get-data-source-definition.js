const Promise = require('bluebird');

const DataSourceDefinition = require('../../models/data-source-definition');
const errors = require('../../common/errors');
const logger = require('../../common/loggers').get('DATA-SOURCE-DEFINITIONS');

// Gets a data source definition.
const getDataSourceDefinition = (input) => {
  logger.debug(`Get data source definition ${ input.id }.`);
  return Promise.try(() => {
    // Find the data source definition with the given ID.
    return DataSourceDefinition.findById(input.id);
  }).then((dataSourceDefinition) => {
    // The data source definition does not exist.
    if (!dataSourceDefinition) {
      logger.error(`Data source definition ${ input.id } does not exist.`);
      throw new errors.NotFoundError('DATA_SOURCE_DEFINITION_NOT_FOUND');
    }
    logger.debug(`Got data source definition ${ input.id }.`);
    return dataSourceDefinition;
  }).catch((error) => {
    logger.error(`Failed to get data source definition ${ input.id }.`, error);
    throw error;
  });
};

module.exports = getDataSourceDefinition;
