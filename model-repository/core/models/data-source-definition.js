const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');

// Data kinds.
const DataKindsSchema = new mongoose.Schema({

  // The data kind.
  dataKindReferenceID: [{
    type: String,
    ref: 'DataKind',
    required: true
  }]

});

// Data source definitions.
const DataSourceDefinitionSchema = new mongoose.Schema({

  // The ID of the data source definition.
  _id: {
    type: String,
    default: uuidv4
  },

  // The name of the data source definition.
  name: {
    type: String,
    required: true,
    unique: true
  },

  // The data interface of the data source definition.
  dataInterfaceReferenceID: {
    type: String,
    ref: 'DataInterface',
    required: true
  },

  // The data kinds of the data source definition.
  dataKindReferenceIDs: {
    type: DataKindsSchema,
    required: true
  }

}, {
  collection: 'data-source-definitions',
  timestamps: true
});

DataSourceDefinitionSchema.set('toJSON', {
  transform: (doc, ret, _options) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    delete ret.createdAt;
    delete ret.updatedAt;
    return ret;
  }
});

module.exports = mongoose.model('DataSourceDefinition', DataSourceDefinitionSchema);
