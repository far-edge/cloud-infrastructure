const validations = require('../core/common/validations');

const _parameter = validations.object().keys({
  name: validations.string().required(),
  description: validations.string().allow('').allow(null).optional(),
  dataType: validations.string().allow('').allow(null).optional(),
  defaultValue: validations.string().allow('').allow(null).optional()
});

// How to create an analytics processor definition.
const createAnalyticsProcessorDefinition = {
  body: {
    name: validations.string().required(),
    description: validations.string().allow('').allow(null).optional(),
    processorType: validations.string().required(),
    version: validations.string().allow('').allow(null).optional(),
    copyright: validations.string().allow('').allow(null).optional(),
    processorLocation: validations.string().allow('').allow(null).optional(),
    additionalInformation: validations.array().items(validations.string()).optional(),
    parameters: validations.object().keys({
      parameter: validations.array().items(_parameter).required()
    }).optional()
  }
};

// How to delete an analytics processor definition.
const deleteAnalyticsProcessorDefinition = {
  params: {
    id: validations.id().required()
  }
};

// How to discover analytics processor definitions.
const discoverAnalyticsProcessorDefinitions = {
  body: {
    id: validations.id().allow('').allow(null).optional(),
    name: validations.string().allow('').allow(null).optional(),
    processorType: validations.string().allow('').allow(null).optional(),
    version: validations.string().allow('').allow(null).optional()
  }
};

// How to get a data kind.
const getAnalyticsProcessorDefinition = {
  params: {
    id: validations.id().required()
  }
};

// How to update an analytics processor definition.
const updateAnalyticsProcessorDefinition = {
  params: {
    id: validations.id().required()
  },
  body: {
    name: validations.string().required(),
    description: validations.string().allow('').allow(null).optional(),
    processorType: validations.string().required(),
    version: validations.string().allow('').allow(null).optional(),
    copyright: validations.string().allow('').allow(null).optional(),
    processorLocation: validations.string().allow('').allow(null).optional(),
    additionalInformation: validations.array().items(validations.string()).optional(),
    parameters: validations.object().keys({
      parameter: validations.array().items(_parameter).required()
    }).optional()
  }
};

module.exports = {
  createAnalyticsProcessorDefinition,
  deleteAnalyticsProcessorDefinition,
  discoverAnalyticsProcessorDefinitions,
  getAnalyticsProcessorDefinition,
  updateAnalyticsProcessorDefinition
};
