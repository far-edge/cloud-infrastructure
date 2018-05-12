const testCreateDataSourceDefinition = require('./create-data-source-definition');
const testDeleteDataSourceDefinition = require('./delete-data-source-definition');
const testGetDataSourceDefinition = require('./get-data-source-definition');
const testSearchDataSourceDefinitions = require('./search-data-source-definitions');
const testUpdateDataSourceDefinition = require('./update-data-source-definition');

describe('Data source definitions', () => {
  // Test the data source definition creation.
  testCreateDataSourceDefinition();

  // Test the data source definition deletion.
  testDeleteDataSourceDefinition();

  // Test the data source definition retrieval.
  testGetDataSourceDefinition();

  // Test the data source definition search.
  testSearchDataSourceDefinitions();

  // Test the data source definition update.
  testUpdateDataSourceDefinition();
});
