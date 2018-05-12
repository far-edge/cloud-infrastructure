const Promise = require('bluebird');

const app = require('../../../server');
const requests = require('../../requests');
const dataSourceDefinitionHelper = require('../../helpers/data-source-definitions');

// Tests the data source definition search.
const testSearchDataSourceDefinitions = () => {
  describe('POST @ /data-source-definitions/search', () => {
    it('should search for data source definitions', () => {
      const p = Promise.try(() => {
        return dataSourceDefinitionHelper.createDataSourceDefinition();
      }).then((dataSourceDefinition) => {
        const data = {
          name: dataSourceDefinition.name
        };
        return requests.cpost(app, '/api/data-source-definitions/search', data);
      });
      return Promise.all([
        p.should.eventually.have.property('statusCode', 200),
        p.should.eventually.have.property('body').that.has.property(
          'dataSourceDefinitions'
        ).with.length(1)
      ]);
    });
  });
};

module.exports = testSearchDataSourceDefinitions;
