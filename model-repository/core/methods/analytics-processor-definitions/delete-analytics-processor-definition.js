const Promise = require('bluebird');

const AnalyticsProcessorDefinition = require('../../models/analytics-processor-definition');
const errors = require('../../common/errors');
const logger = require('../../common/loggers').get('ANALYTICS-PROCESSOR-DEFINITIONS');

// Deletes an analytics processor definition.
const deleteAnalyticsProcessorDefinition = (input) => {
  logger.debug(`Delete analytics processor definition ${ input.id }.`);
  return Promise.try(() => {
    // Find the analytics processor definition with the given ID.
    return AnalyticsProcessorDefinition.findById(input.id);
  }).then((analyticsProcessorDefinition) => {
    // The analytics processor definition does not exist.
    if (!analyticsProcessorDefinition) {
      logger.error(`Analytics processor definition ${ input.id } does not exist.`);
      throw new errors.NotFoundError('ANALYTICS_PROCESSOR_DEFINITION_NOT_FOUND');
    }
    // Delete the analytics processor definition.
    return analyticsProcessorDefinition.remove();
  }).then((_analyticsProcessorDefinition) => {
    logger.debug(`Deleted analytics processor definition ${ input.id }.`);
    return null;
  }).catch((error) => {
    logger.error(`Failed to delete analytics processor definition ${ input.id }.`, error);
    throw error;
  });
};

module.exports = deleteAnalyticsProcessorDefinition;
