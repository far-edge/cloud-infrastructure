const validations = require('../core/common/validations');

// How to create a data kind.
const createDataKind = {
  body: {
    name: validations.string().required(),
    description: validations.string().allow('').allow(null).optional(),
    modelType: validations.string().allow('').allow(null).optional(),
    format: validations.string().allow('').allow(null).optional(),
    quantityKind: validations.string().required()
  }
};

// How to delete a data kind.
const deleteDataKind = {
  params: {
    id: validations.id().required()
  }
};

// How to discover data kinds.
const discoverDataKinds = {
  body: {
    id: validations.id().allow('').allow(null).optional(),
    name: validations.string().allow('').allow(null).optional(),
    modelType: validations.string().allow('').allow(null).optional(),
    format: validations.string().allow('').allow(null).optional(),
    quantityKind: validations.string().allow('').allow(null).optional()
  }
};

// How to get a data kind.
const getDataKind = {
  params: {
    id: validations.id().required()
  }
};

// How to update a data kind.
const updateDataKind = {
  params: {
    id: validations.id().required()
  },
  body: {
    name: validations.string().required(),
    description: validations.string().allow('').allow(null).optional(),
    modelType: validations.string().allow('').allow(null).optional(),
    format: validations.string().allow('').allow(null).optional(),
    quantityKind: validations.string().required()
  }
};

module.exports = {
  createDataKind,
  deleteDataKind,
  discoverDataKinds,
  getDataKind,
  updateDataKind
};
