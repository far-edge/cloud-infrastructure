const faker = require('faker');
const Promise = require('bluebird');

const DataInterface = require('../../core/models/data-interface');

// Creates a data interface.
const createDataInterface = (overrides) => {
  const dataInterface = new DataInterface({
    ...{
      name: faker.random.words(2),
      communicationProtocol: faker.random.words(2),
    },
    ...(faker.random.boolean() ? {
      parameters: {
        parameter: [
          {
            name: faker.random.words(2),
            description: faker.random.words(10),
            dataType: faker.random.words(2),
            defaultValue: faker.random.boolean() ? faker.random.number(100) : faker.random.words(2)
          }
        ]
      }
    } : { }),
    ...overrides
  });
  return Promise.try(() => {
    return dataInterface.save();
  }).then((dataInterface) => {
    return dataInterface.toObject();
  });
};

module.exports = {
  createDataInterface
};
