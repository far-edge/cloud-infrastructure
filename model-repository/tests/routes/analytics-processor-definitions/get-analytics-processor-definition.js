const Promise = require('bluebird');

const app = require('../../../server');
const requests = require('../../requests');
const analyticsProcessorDefinitionHelper = require('../../helpers/analytics-processor-definitions');

// Tests the analytics processor definition retrieval.
const testGetAnalyticsProcessorDefinition = () => {
  describe('GET @ /analytics-processor-definitions/:id', () => {
    it('should get an analytics processor definition', () => {
      const p = Promise.try(() => {
        return analyticsProcessorDefinitionHelper.createAnalyticsProcessorDefinition();
      }).then((analyticsProcessorDefinition) => {
        return requests.cget(app,
          `/api/analytics-processor-definitions/${ analyticsProcessorDefinition._id }`);
      });
      return Promise.all([
        p.should.eventually.have.property('statusCode', 200),
        p.should.eventually.have.property('body').that.is.an('object')
      ]);
    });
  });
};

module.exports = testGetAnalyticsProcessorDefinition;
