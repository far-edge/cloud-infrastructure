const Promise = require('bluebird');

const app = require('../../../server');
const requests = require('../../requests');
const dataInterfaceHelper = require('../../helpers/data-interfaces');

// Tests the data interface search.
const testSearchDataInterfaces = () => {
  describe('POST @ /data-interfaces/search', () => {
    it('should search for data interfaces', () => {
      const p = Promise.try(() => {
        return dataInterfaceHelper.createDataInterface();
      }).then((dataInterface) => {
        const data = {
          name: dataInterface.name
        };
        return requests.cpost(app, '/api/data-interfaces/search', data);
      });
      return Promise.all([
        p.should.eventually.have.property('statusCode', 200),
        p.should.eventually.have.property('body').that.has.property(
          'dataInterfaces'
        ).with.length(1)
      ]);
    });
  });
};

module.exports = testSearchDataInterfaces;
