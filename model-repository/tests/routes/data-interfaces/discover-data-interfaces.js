const Promise = require('bluebird');

const app = require('../../../server');
const dataInterfaceHelper = require('../../helpers/data-interfaces');
const requests = require('../../requests');

// Tests the data interface discovery.
const testDiscoverDataInterfaces = () => {
  describe('POST @ /data-interfaces/discover', () => {
    it('should discover data interfaces', () => {
      const p = Promise.try(() => {
        return dataInterfaceHelper.createDataInterface();
      }).then((dataInterface) => {
        const data = {
          name: dataInterface.name
        };
        return requests.cpost(app, '/api/data-interfaces/discover', data);
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

module.exports = testDiscoverDataInterfaces;
