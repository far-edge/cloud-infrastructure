const testCreateAnalyticsProcessorDefinition = require('./create-analytics-processor-definition');
const testDeleteAnalyticsProcessorDefinition = require('./delete-analytics-processor-definition');
const testDiscoverAnalyticsProcessorDefinitions = require('./discover-analytics-processor-definitions');
const testGetAnalyticsProcessorDefinition = require('./get-analytics-processor-definition');
const testUpdateAnalyticsProcessorDefinition = require('./update-analytics-processor-definition');

describe('Analytics processor definitions', () => {
  // Test the analytics processor definition creation.
  testCreateAnalyticsProcessorDefinition();

  // Test the analytics processor definition deletion.
  testDeleteAnalyticsProcessorDefinition();

  // Test the analytics processor definition discovery.
  testDiscoverAnalyticsProcessorDefinitions();

  // Test the analytics processor definition retrieval.
  testGetAnalyticsProcessorDefinition();

  // Test the analytics processor definition update.
  testUpdateAnalyticsProcessorDefinition();
});
