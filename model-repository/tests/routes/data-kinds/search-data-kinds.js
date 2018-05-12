const Promise = require('bluebird');

const app = require('../../../server');
const requests = require('../../requests');
const dataKindHelper = require('../../helpers/data-kinds');

// Tests the data kind search.
const testSearchDataKinds = () => {
  describe('POST @ /data-kinds/search', () => {
    it('should search for data kinds', () => {
      const p = Promise.try(() => {
        return dataKindHelper.createDataKind();
      }).then((dataKind) => {
        const data = {
          name: dataKind.name
        };
        return requests.cpost(app, '/api/data-kinds/search', data);
      });
      return Promise.all([
        p.should.eventually.have.property('statusCode', 200),
        p.should.eventually.have.property('body').that.has.property(
          'dataKinds'
        ).with.length(1)
      ]);
    });
  });
};

module.exports = testSearchDataKinds;
