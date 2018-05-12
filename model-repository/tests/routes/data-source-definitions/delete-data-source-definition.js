const Promise = require('bluebird');

const app = require('../../../server');
const requests = require('../../requests');
const dataSourceDefinitionHelper = require('../../helpers/data-source-definitions');

// Tests the data source definition deletion.
const testDeleteDataSourceDefinition = () => {
  describe('DELETE @ /data-source-definitions/:id', () => {
    it('should delete a data source definition', () => {
      const p = Promise.try(() => {
        return dataSourceDefinitionHelper.createDataSourceDefinition();
      }).then((dataSourceDefinition) => {
        return requests.cdelete(app, `/api/data-source-definitions/${ dataSourceDefinition._id }`);
      });
      return Promise.all([
        p.should.eventually.have.property('statusCode', 204)
      ]);
    });
  });
};

module.exports = testDeleteDataSourceDefinition;
