const Promise = require('bluebird');

const common = require('./common');
const DataSourceDefinition = require('../../models/data-source-definition');
const errors = require('../../common/errors');
const logger = require('../../common/loggers').get('DATA-SOURCE-DEFINITIONS');

// Updates a data source definition.
const updateDataSourceDefinition = (input) => {
  logger.debug(`Update data source definition ${ input.id }.`);
  return Promise.try(() => {
    // Find the data source definition with the given ID.
    return DataSourceDefinition.findById(input.id);
  }).then((dataSourceDefinition) => {
    // The data source definition does not exist.
    if (!dataSourceDefinition) {
      logger.error(`Data source definition ${ input.id } does not exist.`);
      throw new errors.NotFoundError('DATA_SOURCE_DEFINITION_NOT_FOUND');
    }
    // Change the data source definition.
    dataSourceDefinition.name = input.name;
    dataSourceDefinition.description = input.description;
    dataSourceDefinition.dataInterfaceReferenceID = input.dataInterfaceReferenceID;
    dataSourceDefinition.dataKindReferenceIDs = input.dataKindReferenceIDs;
    // Validate the data source definition.
    return common.validateDataSourceDefinition(dataSourceDefinition);
  }).then((dataSourceDefinition) => {
    // Save the data source definition.
    return dataSourceDefinition.save();
  }).then((dataSourceDefinition) => {
    logger.debug(`Updated data source definition ${ input.id }.`);
    return dataSourceDefinition;
  }).catch((error) => {
    logger.error(`Failed to update data source definition ${ input.id }.`, error);
    throw error;
  });
};

module.exports = updateDataSourceDefinition;
