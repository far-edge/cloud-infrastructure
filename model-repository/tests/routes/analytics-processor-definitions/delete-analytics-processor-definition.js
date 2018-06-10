const Promise = require('bluebird');

const analyticsProcessorDefinitionHelper = require('../../helpers/analytics-processor-definitions');
const app = require('../../../server');
const requests = require('../../requests');

// Tests the analytics processor definition deletion.
const testDeleteAnalyticsProcessorDefinition = () => {
  describe('DELETE @ /analytics-processor-definitions/:id', () => {
    it('should delete an analytics processor definition', () => {
      const p = Promise.try(() => {
        return analyticsProcessorDefinitionHelper.createAnalyticsProcessorDefinition();
      }).then((analyticsProcessorDefinition) => {
        return requests.cdelete(app,
          `/api/analytics-processor-definitions/${ analyticsProcessorDefinition._id }`);
      });
      return Promise.all([
        p.should.eventually.have.property('statusCode', 204)
      ]);
    });
  });
};

module.exports = testDeleteAnalyticsProcessorDefinition;
