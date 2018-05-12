const Promise = require('bluebird');

const chisels = require('../../common/chisels');
const AnalyticsProcessorDefinition = require('../../models/analytics-processor-definition');
const errors = require('../../common/errors');
const logger = require('../../common/loggers').get('ANALYTICS-PROCESSOR-DEFINITIONS');

// Validates an analytics processor definition.
const validateAnalyticsProcessorDefinition = (analyticsProcessorDefinition) => {
  return Promise.try(() => {
    // The name must be unique among all analytics processor definitions.
    return AnalyticsProcessorDefinition.count({
      _id: {
        $ne: analyticsProcessorDefinition._id
      },
      name: analyticsProcessorDefinition.name
    }).then((exists) => {
      if (exists) {
        logger.error(`Name ${ analyticsProcessorDefinition.name } is taken.`);
        throw new errors.BadRequestError('NAME_TAKEN');
      }
      return null;
    });
  }).then(() => {
    // All parameters must have unique names.
    const parameters = analyticsProcessorDefinition.parameters ?
      analyticsProcessorDefinition.parameters.parameter || [] : [];
    const nparameters = parameters.length;
    const nnames = chisels.distinct(parameters.map((p) => { return p.name; })).length;
    if (nnames < nparameters) {
      logger.error('There are more than one parameters with the same name.');
      throw new errors.BadRequestError('DUPLICATE_PARAMETER_NAME');
    }
    return null;
  }).then(() => {
    return analyticsProcessorDefinition;
  });
};

module.exports = {
  validateAnalyticsProcessorDefinition
};
