const Promise = require('bluebird');

const AnalyticsProcessorDefinition = require('../../models/analytics-processor-definition');
const errors = require('../../common/errors');
const logger = require('../../common/loggers').get('ANALYTICS-PROCESSOR-DEFINITIONS');

// Gets an analytics processor definition.
const getAnalyticsProcessorDefinition = (input) => {
  logger.debug(`Get analytics processor definition ${ input.id }.`);
  return Promise.try(() => {
    // Find the analytics processor definition with the given ID.
    return AnalyticsProcessorDefinition.findById(input.id);
  }).then((analyticsProcessorDefinition) => {
    // The analytics processor definition does not exist.
    if (!analyticsProcessorDefinition) {
      logger.error(`Analytics processor definition ${ input.id } does not exist.`);
      throw new errors.NotFoundError('ANALYTICS_PROCESSOR_DEFINITION_NOT_FOUND');
    }
    logger.debug(`Got analytics processor definition ${ input.id }.`);
    return analyticsProcessorDefinition;
  }).catch((error) => {
    logger.error(`Failed to get analytics processor definition ${ input.id }.`, error);
    throw error;
  });
};

module.exports = getAnalyticsProcessorDefinition;
