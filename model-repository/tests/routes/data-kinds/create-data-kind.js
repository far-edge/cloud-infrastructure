const faker = require('faker');
const Promise = require('bluebird');

const app = require('../../../server');
const requests = require('../../requests');

// Tests the data kind creation.
const testCreateDataKind = () => {
  describe('POST @ /data-kinds', () => {
    it('should create a data kind', () => {
      const data = {
        ...{
          name: faker.random.words(2),
          quantityKind: faker.random.words(10)
        },
        ...(faker.random.boolean() ? { description: faker.random.words(10) } : { }),
        ...(faker.random.boolean() ? { modelType: faker.random.words(10) } : { }),
        ...(faker.random.boolean() ? { format: faker.random.words(10) } : { })
      };
      const p = Promise.try(() => {
        return requests.cpost(app, '/api/data-kinds', data);
      });
      return Promise.all([
        p.should.eventually.have.property('statusCode', 201),
        p.should.eventually.have.property('body').that.is.an('object')
      ]);
    });
  });
};

module.exports = testCreateDataKind;
