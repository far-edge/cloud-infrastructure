const faker = require('faker');
const Promise = require('bluebird');

const dataInterfaces = require('./data-interfaces');
const dataKinds = require('./data-kinds');
const DataSourceDefinition = require('../../core/models/data-source-definition');

// Creates a data source definition.
const createDataSourceDefinition = (overrides) => {
  return Promise.try(() => {
    return Promise.all([
      dataInterfaces.createDataInterface({}),
      dataKinds.createDataKind({})
    ]);
  }).spread((dataInterface, dataKind) => {
    const dataSourceDefinition = new DataSourceDefinition({
      ...{
        name: faker.random.words(2),
        dataInterfaceReferenceID: dataInterface._id,
        dataKindReferenceIDs: {
          dataKindReferenceID: [
            dataKind._id
          ]
        }
      },
      ...overrides
    });
    return dataSourceDefinition.save();
  }).then((dataSourceDefinition) => {
    return dataSourceDefinition.toObject();
  });
};

module.exports = {
  createDataSourceDefinition
};
