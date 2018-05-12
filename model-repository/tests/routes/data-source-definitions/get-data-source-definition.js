const Promise = require('bluebird');

const app = require('../../../server');
const requests = require('../../requests');
const dataSourceDefinitionHelper = require('../../helpers/data-source-definitions');

// Tests the data source definition retrieval.
const testGetDataSourceDefinition = () => {
  describe('GET @ /data-source-definitions/:id', () => {
    it('should get a data source definition', () => {
      const p = Promise.try(() => {
        return dataSourceDefinitionHelper.createDataSourceDefinition();
      }).then((dataSourceDefinition) => {
        return requests.cget(app, `/api/data-source-definitions/${ dataSourceDefinition._id }`);
      });
      return Promise.all([
        p.should.eventually.have.property('statusCode', 200),
        p.should.eventually.have.property('body').that.is.an('object')
      ]);
    });
  });
};

module.exports = testGetDataSourceDefinition;
