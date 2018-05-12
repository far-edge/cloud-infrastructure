const faker = require('faker');
const Promise = require('bluebird');

const DataKind = require('../../core/models/data-kind');

// Creates a data kind.
const createDataKind = (overrides) => {
  const dataKind = new DataKind({
    ...{
      name: faker.random.words(2),
      quantityKind: faker.random.words(10)
    },
    ...(faker.random.boolean() ? { description: faker.random.words(10) } : { }),
    ...(faker.random.boolean() ? { modelType: faker.random.words(10) } : { }),
    ...(faker.random.boolean() ? { format: faker.random.words(10) } : { }),
    ...overrides
  });
  return Promise.try(() => {
    return dataKind.save();
  }).then((dataKind) => {
    return dataKind.toObject();
  });
};

module.exports = {
  createDataKind
};
