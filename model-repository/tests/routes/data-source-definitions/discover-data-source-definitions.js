const Promise = require('bluebird');

const app = require('../../../server');
const dataSourceDefinitionHelper = require('../../helpers/data-source-definitions');
const requests = require('../../requests');

// Tests the data source definition discovery.
const testDiscoverDataSourceDefinitions = () => {
  describe('POST @ /data-source-definitions/discover', () => {
    it('should discover data source definitions', () => {
      const p = Promise.try(() => {
        return dataSourceDefinitionHelper.createDataSourceDefinition();
      }).then((dataSourceDefinition) => {
        const data = {
          name: dataSourceDefinition.name
        };
        return requests.cpost(app, '/api/data-source-definitions/discover', data);
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

module.exports = testDiscoverDataSourceDefinitions;
