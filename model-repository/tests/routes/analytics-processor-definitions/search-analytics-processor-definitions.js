const Promise = require('bluebird');

const app = require('../../../server');
const requests = require('../../requests');
const analyticsProcessorDefinitionHelper = require('../../helpers/analytics-processor-definitions');

// Tests the analytics processor definition search.
const testSearchAnalyticsProcessorDefinitions = () => {
  describe('PSST @ /analytics-processor-definitions/search', () => {
    it('should search for analytics processor definitions', () => {
      const p = Promise.try(() => {
        return analyticsProcessorDefinitionHelper.createAnalyticsProcessorDefinition();
      }).then((analyticsProcessorDefinition) => {
        const data = {
          name: analyticsProcessorDefinition.name
        };
        return requests.cpost(app, '/api/analytics-processor-definitions/search', data);
      });
      return Promise.all([
        p.should.eventually.have.property('statusCode', 200),
        p.should.eventually.have.property('body').that.has.property(
          'analyticsProcessorDefinitions'
        ).with.length(1)
      ]);
    });
  });
};

module.exports = testSearchAnalyticsProcessorDefinitions;
