const testCreateDataInterface = require('./create-data-interface');
const testDeleteDataInterface = require('./delete-data-interface');
const testGetDataInterface = require('./get-data-interface');
const testSearchDataInterfaces = require('./search-data-interfaces');
const testUpdateDataInterface = require('./update-data-interface');

describe('Data interfaces', () => {
  // Test the data interface creation.
  testCreateDataInterface();

  // Test the data interface deletion.
  testDeleteDataInterface();

  // Test the data interface retrieval.
  testGetDataInterface();

  // Test the data interface search.
  testSearchDataInterfaces();

  // Test the data interface update.
  testUpdateDataInterface();
});
