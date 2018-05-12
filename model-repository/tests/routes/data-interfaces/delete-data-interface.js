const Promise = require('bluebird');

const app = require('../../../server');
const requests = require('../../requests');
const dataInterfaceHelper = require('../../helpers/data-interfaces');

// Tests the data interface deletion.
const testDeleteDataInterface = () => {
  describe('DELETE @ /data-interfaces/:id', () => {
    it('should delete a data interface', () => {
      const p = Promise.try(() => {
        return dataInterfaceHelper.createDataInterface();
      }).then((dataInterface) => {
        return requests.cdelete(app, `/api/data-interfaces/${ dataInterface._id }`);
      });
      return Promise.all([
        p.should.eventually.have.property('statusCode', 204)
      ]);
    });
  });
};

module.exports = testDeleteDataInterface;
