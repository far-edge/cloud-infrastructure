const faker = require('faker');
const Promise = require('bluebird');

const app = require('../../../server');
const dataSourceDefinitionHelper = require('../../helpers/data-source-definitions');
const requests = require('../../requests');

// Tests the data source definition update.
const testUpdateDataSourceDefinition = () => {
  describe('PUT @ /data-source-definitions/:id', () => {
    it('should update a data source definition', () => {
      const p = Promise.try(() => {
        return dataSourceDefinitionHelper.createDataSourceDefinition();
      }).then((dataSourceDefinition) => {
        const data = { ...dataSourceDefinition, name: faker.random.words(2) };
        return requests.cput(app, `/api/data-source-definitions/${ dataSourceDefinition._id }`,
          data);
      });
      return Promise.all([
        p.should.eventually.have.property('statusCode', 200),
        p.should.eventually.have.property('body').that.is.an('object')
      ]);
    });
  });
};

module.exports = testUpdateDataSourceDefinition;
