const faker = require('faker');
const Promise = require('bluebird');

const app = require('../../../server');
const dataInterfaceHelper = require('../../helpers/data-interfaces');
const requests = require('../../requests');

// Tests the data interface update.
const testUpdateDataInterface = () => {
  describe('PUT @ /data-interfaces/:id', () => {
    it('should update a data interface', () => {
      const p = Promise.try(() => {
        return dataInterfaceHelper.createDataInterface();
      }).then((dataInterface) => {
        const data = { ...dataInterface, name: faker.random.words(2) };
        return requests.cput(app, `/api/data-interfaces/${ dataInterface._id }`, data);
      });
      return Promise.all([
        p.should.eventually.have.property('statusCode', 200),
        p.should.eventually.have.property('body').that.is.an('object')
      ]);
    });
  });
};

module.exports = testUpdateDataInterface;
