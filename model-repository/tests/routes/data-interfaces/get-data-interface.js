const Promise = require('bluebird');

const app = require('../../../server');
const dataInterfaceHelper = require('../../helpers/data-interfaces');
const requests = require('../../requests');

// Tests the data interface retrieval.
const testGetDataInterface = () => {
  describe('GET @ /data-interfaces/:id', () => {
    it('should get a data interface', () => {
      const p = Promise.try(() => {
        return dataInterfaceHelper.createDataInterface();
      }).then((dataInterface) => {
        return requests.cget(app, `/api/data-interfaces/${ dataInterface._id }`);
      });
      return Promise.all([
        p.should.eventually.have.property('statusCode', 200),
        p.should.eventually.have.property('body').that.is.an('object')
      ]);
    });
  });
};

module.exports = testGetDataInterface;
