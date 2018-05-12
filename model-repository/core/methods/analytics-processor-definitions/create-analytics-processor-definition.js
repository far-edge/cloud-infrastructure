const Promise = require('bluebird');

const AnalyticsProcessorDefinition = require('../../models/analytics-processor-definition');
const common = require('./common');
const logger = require('../../common/loggers').get('ANALYTICS-PROCESSOR-DEFINITIONS');

// Creates an analytics processor definition.
const createAnalyticsProcessorDefinition = (input) => {
  logger.debug('Create an analytics processor definition.');
  return Promise.try(() => {
    // Create the analytics processor definition.
    const analyticsProcessorDefinition = new AnalyticsProcessorDefinition(input);
    // Validate the analytics processor definition.
    return common.validateAnalyticsProcessorDefinition(analyticsProcessorDefinition);
  }).then((analyticsProcessorDefinition) => {
    // Save the analytics processor definition.
    return analyticsProcessorDefinition.save();
  }).then((analyticsProcessorDefinition) => {
    logger.debug(`Created analytics processor definition ${ analyticsProcessorDefinition._id }.`);
    return analyticsProcessorDefinition;
  }).catch((error) => {
    logger.error('Failed to create an analytics processor definition.', error);
    throw error;
  });
};

module.exports = createAnalyticsProcessorDefinition;
