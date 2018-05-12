const faker = require('faker');
const Promise = require('bluebird');

const app = require('../../../server');
const requests = require('../../requests');

// Tests the data interface creation.
const testCreateDataInterface = () => {
  describe('POST @ /data-interfaces', () => {
    it('should create a data interface', () => {
      const data = {
        ...{
          name: faker.random.words(2),
          communicationProtocol: faker.random.words(2)
        },
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
        return requests.cpost(app, '/api/data-interfaces', data);
      });
      return Promise.all([
        p.should.eventually.have.property('statusCode', 201),
        p.should.eventually.have.property('body').that.is.an('object')
      ]);
    });
  });
};

module.exports = testCreateDataInterface;
