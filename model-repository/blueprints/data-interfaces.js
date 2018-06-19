const validations = require('../core/common/validations');

const _parameter = validations.object().keys({
  name: validations.string().required(),
  description: validations.string().allow('').allow(null).optional(),
  dataType: validations.string().allow('').allow(null).optional(),
  defaultValue: validations.string().allow('').allow(null).optional()
});

// How to create a data interface.
const createDataInterface = {
  body: {
    name: validations.string().required(),
    communicationProtocol: validations.string().allow('').allow(null).optional(),
    parameters: validations.object().keys({
      parameter: validations.array().items(_parameter).required()
    }).optional()
  }
};

// How to delete a data interface.
const deleteDataInterface = {
  params: {
    id: validations.id().required()
  }
};

// How to discover data interfaces.
const discoverDataInterfaces = {
  body: {
    id: validations.id().allow('').allow(null).optional(),
    name: validations.string().allow('').allow(null).optional(),
    communicationProtocol: validations.string().allow('').allow(null).optional()
  }
};

// How to get a data kind.
const getDataInterface = {
  params: {
    id: validations.id().required()
  }
};

// How to update a data interface.
const updateDataInterface = {
  params: {
    id: validations.id().required()
  },
  body: {
    name: validations.string().required(),
    communicationProtocol: validations.string().allow('').allow(null).optional(),
    parameters: validations.object().keys({
      parameter: validations.array().items(_parameter).required()
    }).optional()
  }
};

module.exports = {
  createDataInterface,
  deleteDataInterface,
  discoverDataInterfaces,
  getDataInterface,
  updateDataInterface
};
