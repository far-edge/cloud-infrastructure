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
    type: mongoose.Schema.Types.Mixed,
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

// Data interfaces.
const DataInterfaceSchema = new mongoose.Schema({

  // The ID of the data interface.
  _id: {
    type: String,
    default: uuidv4
  },

  // The name of the data interface.
  name: {
    type: String,
    required: true,
    unique: true
  },

  // The protocol of the data interface (e.g., MQTT).
  communicationProtocol: {
    type: String,
    required: false
  },

  // The parameters of the data interface.
  parameters: {
    type: ParametersSchema,
    required: false
  }

}, {
  collection: 'data-interfaces',
  timestamps: true
});

module.exports = mongoose.model('DataInterface', DataInterfaceSchema);
