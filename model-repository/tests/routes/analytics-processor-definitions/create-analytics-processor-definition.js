const faker = require('faker');
const Promise = require('bluebird');

const app = require('../../../server');
const requests = require('../../requests');

// Tests the analytics processor definition creation.
const testCreateAnalyticsProcessorDefinition = () => {
  describe('POST @ /analytics-processor-definitions', () => {
    it('should create a analytics processor definition', () => {
      const data = {
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
        } : { })
      };
      const p = Promise.try(() => {
        return requests.cpost(app, '/api/analytics-processor-definitions', data);
      });
      return Promise.all([
        p.should.eventually.have.property('statusCode', 201),
        p.should.eventually.have.property('body').that.is.an('object')
      ]);
    });
  });
};

module.exports = testCreateAnalyticsProcessorDefinition;
