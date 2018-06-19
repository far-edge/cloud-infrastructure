const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');

// Data kinds.
const DataKindSchema = new mongoose.Schema({

  // The ID of the data kind.
  _id: {
    type: String,
    default: uuidv4
  },

  // The name of the data kind.
  name: {
    type: String,
    required: true,
    unique: true
  },

  // The description of the data kind.
  description: {
    type: String,
    required: false
  },

  // The model type of the data kind (e.g., SenML).
  modelType: {
    type: String,
    required: false
  },

  // The format of the data kind (e.g., JSON).
  format: {
    type: String,
    required: false
  },

  // The kind of the quantity of the data kind (e.g., Temperature).
  quantityKind: {
    type: String,
    required: true
  }

}, {
  collection: 'data-kinds',
  timestamps: true
});

DataKindSchema.set('toJSON', {
  transform: (doc, ret, _options) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    delete ret.createdAt;
    delete ret.updatedAt;
    return ret;
  }
});

module.exports = mongoose.model('DataKind', DataKindSchema);
