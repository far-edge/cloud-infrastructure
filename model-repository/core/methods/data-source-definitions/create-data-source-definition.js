const Promise = require('bluebird');

const DataSourceDefinition = require('../../models/data-source-definition');
const common = require('./common');
const logger = require('../../common/loggers').get('DATA-SOURCE-DEFINITIONS');

// Creates a data source definition.
const createDataSourceDefinition = (input) => {
  logger.debug('Create a data source definition.');
  return Promise.try(() => {
    // Create the data source definition.
    const dataSourceDefinition = new DataSourceDefinition(input);
    // Validate the data source definition.
    return common.validateDataSourceDefinition(dataSourceDefinition);
  }).then((dataSourceDefinition) => {
    // Save the data source definition.
    return dataSourceDefinition.save();
  }).then((dataSourceDefinition) => {
    logger.debug(`Created data source definition ${ dataSourceDefinition._id }.`);
    return dataSourceDefinition;
  }).catch((error) => {
    logger.error('Failed to create a data source definition.', error);
    throw error;
  });
};

module.exports = createDataSourceDefinition;
