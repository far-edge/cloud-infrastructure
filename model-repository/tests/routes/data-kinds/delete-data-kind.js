const Promise = require('bluebird');

const app = require('../../../server');
const dataKindHelper = require('../../helpers/data-kinds');
const requests = require('../../requests');

// Tests the data kind deletion.
const testDeleteDataKind = () => {
  describe('DELETE @ /data-kinds/:id', () => {
    it('should delete a data kind', () => {
      const p = Promise.try(() => {
        return dataKindHelper.createDataKind();
      }).then((dataKind) => {
        return requests.cdelete(app, `/api/data-kinds/${ dataKind._id }`);
      });
      return Promise.all([
        p.should.eventually.have.property('statusCode', 204)
      ]);
    });
  });
};

module.exports = testDeleteDataKind;
