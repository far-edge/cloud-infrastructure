const testCreateDataKind = require('./create-data-kind');
const testDeleteDataKind = require('./delete-data-kind');
const testGetDataKind = require('./get-data-kind');
const testSearchDataKinds = require('./search-data-kinds');
const testUpdateDataKind = require('./update-data-kind');

describe('Data kinds', () => {
  // Test the data kind creation.
  testCreateDataKind();

  // Test the data kind deletion.
  testDeleteDataKind();

  // Test the data kind retrieval.
  testGetDataKind();

  // Test the data kind search.
  testSearchDataKinds();

  // Test the data kind update.
  testUpdateDataKind();
});
