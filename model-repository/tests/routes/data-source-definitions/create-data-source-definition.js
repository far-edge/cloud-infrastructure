const faker = require('faker');
const Promise = require('bluebird');

const app = require('../../../server');
const dataInterfaceHelper = require('../../helpers/data-interfaces');
const dataKindHelper = require('../../helpers/data-kinds');
const requests = require('../../requests');

// Tests the data source definition creation.
const testCreateDataSourceDefinition = () => {
  describe('POST @ /data-source-definitions', () => {
    it('should create a data source definition', () => {
      const p1 = dataInterfaceHelper.createDataInterface({});
      const p2 = dataKindHelper.createDataKind({});
      const p = Promise.all([ p1, p2 ]).spread((dataInterface, dataKind) => {
        const data = {
          ...{
            name: faker.random.words(2),
            dataInterfaceReferenceID: dataInterface._id,
            dataKindReferenceIDs: {
              dataKindReferenceID: [
                dataKind._id
              ]
            }
          },
          ...(faker.random.boolean() ? { description: faker.random.words(10) } : { })
        };
        return requests.cpost(app, '/api/data-source-definitions', data);
      });
      return Promise.all([
        p.should.eventually.have.property('statusCode', 201),
        p.should.eventually.have.property('body').that.is.an('object')
      ]);
    });
  });
};

module.exports = testCreateDataSourceDefinition;
