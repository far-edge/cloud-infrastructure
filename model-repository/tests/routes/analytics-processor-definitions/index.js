const testCreateAnalyticsProcessorDefinition = require('./create-analytics-processor-definition');
const testDeleteAnalyticsProcessorDefinition = require('./delete-analytics-processor-definition');
const testGetAnalyticsProcessorDefinition = require('./get-analytics-processor-definition');
const testSearchAnalyticsProcessorDefinitions = require('./search-analytics-processor-definitions');
const testUpdateAnalyticsProcessorDefinition = require('./update-analytics-processor-definition');

describe('Analytics processor definitions', () => {
  // Test the analytics processor definition creation.
  testCreateAnalyticsProcessorDefinition();

  // Test the analytics processor definition deletion.
  testDeleteAnalyticsProcessorDefinition();

  // Test the analytics processor definition retrieval.
  testGetAnalyticsProcessorDefinition();

  // Test the analytics processor definition search.
  testSearchAnalyticsProcessorDefinitions();

  // Test the analytics processor definition update.
  testUpdateAnalyticsProcessorDefinition();
});
