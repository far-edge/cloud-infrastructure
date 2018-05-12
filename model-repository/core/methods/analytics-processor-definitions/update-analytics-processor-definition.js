const Promise = require('bluebird');

const common = require('./common');
const AnalyticsProcessorDefinition = require('../../models/analytics-processor-definition');
const errors = require('../../common/errors');
const logger = require('../../common/loggers').get('ANALYTICS-PROCESSOR-DEFINITIONS');

// Updates an analytics processor definition.
const updateAnalyticsProcessorDefinition = (input) => {
  logger.debug(`Update analytics processor definition ${ input.id }.`);
  return Promise.try(() => {
    // Find the analytics processor definition with the given ID.
    return AnalyticsProcessorDefinition.findById(input.id);
  }).then((analyticsProcessorDefinition) => {
    // The analytics processor definition does not exist.
    if (!analyticsProcessorDefinition) {
      logger.error(`Analytics processor definition ${ input.id } does not exist.`);
      throw new errors.NotFoundError('ANALYTICS_PROCESSOR_DEFINITION_NOT_FOUND');
    }
    // Change the analytics processor definition.
    analyticsProcessorDefinition.name = input.name;
    analyticsProcessorDefinition.description = input.description;
    analyticsProcessorDefinition.processorType = input.processorType;
    analyticsProcessorDefinition.version = input.version;
    analyticsProcessorDefinition.copyright = input.copyright;
    analyticsProcessorDefinition.processorLocation = input.processorLocation;
    analyticsProcessorDefinition.additionalInformation = input.additionalInformation;
    analyticsProcessorDefinition.parameters = input.parameters;
    // Validate the analytics processor definition.
    return common.validateAnalyticsProcessorDefinition(analyticsProcessorDefinition);
  }).then((analyticsProcessorDefinition) => {
    // Save the analytics processor definition.
    return analyticsProcessorDefinition.save();
  }).then((analyticsProcessorDefinition) => {
    logger.debug(`Updated analytics processor definition ${ input.id }.`);
    return analyticsProcessorDefinition;
  }).catch((error) => {
    logger.error(`Failed to update analytics processor definition ${ input.id }.`, error);
    throw error;
  });
};

module.exports = updateAnalyticsProcessorDefinition;
