const faker = require('faker');
const Promise = require('bluebird');

const analyticsProcessorDefinitionHelper = require('../../helpers/analytics-processor-definitions');
const app = require('../../../server');
const requests = require('../../requests');

// Tests the analytics processor definition update.
const testUpdateAnalyticsProcessorDefinition = () => {
  describe('PUT @ /analytics-processor-definitions/:id', () => {
    it('should update an analytics processor definition', () => {
      const p = Promise.try(() => {
        return analyticsProcessorDefinitionHelper.createAnalyticsProcessorDefinition();
      }).then((analyticsProcessorDefinition) => {
        const data = { ...analyticsProcessorDefinition, name: faker.random.words(2) };
        return requests.cput(app,
          `/api/analytics-processor-definitions/${ analyticsProcessorDefinition._id }`, data);
      });
      return Promise.all([
        p.should.eventually.have.property('statusCode', 200),
        p.should.eventually.have.property('body').that.is.an('object')
      ]);
    });
  });
};

module.exports = testUpdateAnalyticsProcessorDefinition;
