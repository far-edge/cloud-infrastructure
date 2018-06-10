const Promise = require('bluebird');

const app = require('../../../server');
const dataKindHelper = require('../../helpers/data-kinds');
const requests = require('../../requests');

// Tests the data kind discovery.
const testDiscoverDataKinds = () => {
  describe('POST @ /data-kinds/discover', () => {
    it('should discover data kinds', () => {
      const p = Promise.try(() => {
        return dataKindHelper.createDataKind();
      }).then((dataKind) => {
        const data = {
          name: dataKind.name
        };
        return requests.cpost(app, '/api/data-kinds/discover', data);
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

module.exports = testDiscoverDataKinds;
