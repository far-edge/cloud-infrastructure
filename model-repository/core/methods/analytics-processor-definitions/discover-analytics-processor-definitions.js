const Promise = require('bluebird');

const AnalyticsProcessorDefinition = require('../../models/analytics-processor-definition');
const logger = require('../../common/loggers').get('ANALYTICS-PROCESSOR-DEFINITIONS');

// Discovers analytics processor definitions.
const discoverAnalyticsProcessorDefinitions = (input) => {
  logger.debug('Discover analytics processor definitions.');
  return Promise.try(() => {
    // Find the analytics processor definitions that match the given criteria.
    return AnalyticsProcessorDefinition.find({
      ...(input._id ? { _id: input._id } : { }),
      ...(input.name ? { name: input.name } : { }),
      ...(input.processorType ? { processorType: input.processorType } : { }),
      ...(input.version ? { version: input.version } : { }),

    });
  }).then((analyticsProcessorDefinitions) => {
    logger.debug('Discovered analytics processor definitions.');
    return { analyticsProcessorDefinitions };
  }).catch((error) => {
    logger.error('Failed to discover analytics processor definitions.', error);
    throw error;
  });
};

module.exports = discoverAnalyticsProcessorDefinitions;
