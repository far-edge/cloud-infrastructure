const faker = require('faker');
const Promise = require('bluebird');

const AnalyticsProcessorDefinition = require('../../core/models/analytics-processor-definition');

// Creates a analytics processor definition.
const createAnalyticsProcessorDefinition = (overrides) => {
  const analyticsProcessorDefinition = new AnalyticsProcessorDefinition({
    ...{
      name: faker.random.words(2),
      processorType: faker.random.words(2)
    },
    ...(faker.random.boolean() ? { description: faker.random.words(10) } : { }),
    ...(faker.random.boolean() ? { version: faker.random.words(10) } : { }),
    ...(faker.random.boolean() ? { copyright: faker.random.words(10) } : { }),
    ...(faker.random.boolean() ? { processorLocation: faker.random.words(10) } : { }),
    ...(faker.random.boolean() ? { additionalInformation: [ faker.random.words(10) ] } : { }),
    ...(faker.random.boolean() ? {
      parameters: {
        parameter: [
          {
            name: faker.random.words(2),
            description: faker.random.words(10),
            dataType: faker.random.words(2),
            defaultValue: faker.random.words(2)
          }
        ]
      }
    } : { }),
    ...overrides
  });
  return Promise.try(() => {
    return analyticsProcessorDefinition.save();
  }).then((analyticsProcessorDefinition) => {
    return analyticsProcessorDefinition.toObject();
  });
};

module.exports = {
  createAnalyticsProcessorDefinition
};
