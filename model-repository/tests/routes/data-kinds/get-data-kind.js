const Promise = require('bluebird');

const app = require('../../../server');
const dataKindHelper = require('../../helpers/data-kinds');
const requests = require('../../requests');

// Tests the data kind retrieval.
const testGetDataKind = () => {
  describe('GET @ /data-kinds/:id', () => {
    it('should get a data kind', () => {
      const p = Promise.try(() => {
        return dataKindHelper.createDataKind();
      }).then((dataKind) => {
        return requests.cget(app, `/api/data-kinds/${ dataKind._id }`);
      });
      return Promise.all([
        p.should.eventually.have.property('statusCode', 200),
        p.should.eventually.have.property('body').that.is.an('object')
      ]);
    });
  });
};

module.exports = testGetDataKind;
