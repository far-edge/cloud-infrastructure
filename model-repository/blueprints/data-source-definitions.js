const validations = require('../core/common/validations');

// How to create a data source definition.
const createDataSourceDefinition = {
  body: {
    name: validations.string().required(),
    dataInterfaceReferenceID: validations.id().required(),
    dataKindReferenceIDs: validations.object().keys({
      dataKindReferenceID: validations.array().items(validations.id()).required()
    }).required()
  }
};

// How to delete a data source definition.
const deleteDataSourceDefinition = {
  params: {
    id: validations.id().required()
  }
};

// How to discover data source definitions.
const discoverDataSourceDefinitions = {
  body: {
    name: validations.string().optional(),
    dataInterfaceReferenceID: validations.id().optional(),
    dataKindReferenceID: validations.id().optional()
  }
};

// How to get a data source definition.
const getDataSourceDefinition = {
  params: {
    id: validations.id().required()
  }
};

// How to update a data source definition.
const updateDataSourceDefinition = {
  params: {
    id: validations.id().required()
  },
  body: {
    name: validations.string().required(),
    dataInterfaceReferenceID: validations.id().required(),
    dataKindReferenceIDs: validations.object().keys({
      dataKindReferenceID: validations.array().items(validations.id()).required()
    }).required()
  }
};

module.exports = {
  createDataSourceDefinition,
  deleteDataSourceDefinition,
  discoverDataSourceDefinitions,
  getDataSourceDefinition,
  updateDataSourceDefinition
};
