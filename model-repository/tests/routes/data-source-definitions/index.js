const testCreateDataSourceDefinition = require('./create-data-source-definition');
const testDeleteDataSourceDefinition = require('./delete-data-source-definition');
const testDiscoverDataSourceDefinitions = require('./discover-data-source-definitions');
const testGetDataSourceDefinition = require('./get-data-source-definition');
const testUpdateDataSourceDefinition = require('./update-data-source-definition');

describe('Data source definitions', () => {
  // Test the data source definition creation.
  testCreateDataSourceDefinition();

  // Test the data source definition deletion.
  testDeleteDataSourceDefinition();

  // Test the data source definition retrieval.
  testGetDataSourceDefinition();

  // Test the data source definition discovery.
  testDiscoverDataSourceDefinitions();

  // Test the data source definition update.
  testUpdateDataSourceDefinition();
});
