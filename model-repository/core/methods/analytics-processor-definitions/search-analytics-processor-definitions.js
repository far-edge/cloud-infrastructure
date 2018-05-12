const Promise = require('bluebird');

const AnalyticsProcessorDefinition = require('../../models/analytics-processor-definition');
const logger = require('../../common/loggers').get('ANALYTICS-PROCESSOR-DEFINITIONS');

// Searches for analytics processor definitions.
const searchhAnalyticsProcessorDefinitions = (input) => {
  logger.debug('Search for analytics processor definitions.');
  return Promise.try(() => {
    // Find the analytics processor definitions that match the given criteria.
    return AnalyticsProcessorDefinition.find({
      ...(input.name ? { name: input.name } : { }),
      ...(input.processorType ? { processorType: input.processorType } : { }),
      ...(input.version ? { version: input.version } : { }),

    });
  }).then((analyticsProcessorDefinitions) => {
    logger.debug('Searched for analytics processor definitions.');
    return { analyticsProcessorDefinitions };
  }).catch((error) => {
    logger.error('Failed to search for analytics processor definitions.', error);
    throw error;
  });
};

module.exports = searchhAnalyticsProcessorDefinitions;
