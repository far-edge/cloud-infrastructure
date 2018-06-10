const Promise = require('bluebird');

const analyticsProcessorDefinitionHelper = require('../../helpers/analytics-processor-definitions');
const app = require('../../../server');
const requests = require('../../requests');

// Tests the analytics processor definition discovery.
const testDiscoverAnalyticsProcessorDefinitions = () => {
  describe('PSST @ /analytics-processor-definitions/discover', () => {
    it('should discover analytics processor definitions', () => {
      const p = Promise.try(() => {
        return analyticsProcessorDefinitionHelper.createAnalyticsProcessorDefinition();
      }).then((analyticsProcessorDefinition) => {
        const data = {
          name: analyticsProcessorDefinition.name
        };
        return requests.cpost(app, '/api/analytics-processor-definitions/discover', data);
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

module.exports = testDiscoverAnalyticsProcessorDefinitions;
