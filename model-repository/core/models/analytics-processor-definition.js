const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');

// Parameters.
const ParameterSchema = new mongoose.Schema({

  // The name of the parameter.
  name: {
    type: String,
    required: true
  },

  // The description of the parameter.
  description: {
    type: String,
    required: false
  },

  // The type of the parameter (e.g., string).
  dataType: {
    type: String,
    required: false
  },

  // The default value of the parameter.
  defaultValue: {
    type: String,
    required: false
  }

});

// Parameter sets.
const ParametersSchema = new mongoose.Schema({

  // The parameters.
  parameter: {
    type: [ ParameterSchema ],
    required: true
  }

});

// Analytics processor definitions.
const AnalyticsProcessorDefinitionSchema = new mongoose.Schema({

  // The ID of the analytics processor definition.
  _id: {
    type: String,
    default: uuidv4
  },

  // The name of the analytics processor definition.
  name: {
    type: String,
    required: true,
    unique: true
  },

  // The description of the analytics processor definition.
  description: {
    type: String,
    required: false
  },

  // The processor type of the analytics processor definition.
  processorType: {
    type: String,
    required: true
  },

  // The version of the analytics processor definition.
  version: {
    type: String,
    required: false
  },

  // The copyright of the analytics processor definition.
  copyright: {
    type: String,
    required: false
  },

  // The location of the library of the analytics processor definition.
  processorLocation: {
    type: String,
    required: false
  },

  // Additional information about the analytics processor definition.
  additionalInformation: {
    type: [ String ],
    required: false
  },

  // The parameters of the data interface.
  parameters: {
    type: ParametersSchema,
    required: false
  }

}, {
  collection: 'analytics-processor-definitions',
  timestamps: true
});

module.exports = mongoose.model('AnalyticsProcessorDefinition', AnalyticsProcessorDefinitionSchema);
