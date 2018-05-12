const faker = require('faker');
const Promise = require('bluebird');

const app = require('../../../server');
const requests = require('../../requests');
const dataKindHelper = require('../../helpers/data-kinds');

// Tests the data kind update.
const testUpdateDataKind = () => {
  describe('PUT @ /data-kinds/:id', () => {
    it('should update a data kind', () => {
      const p = Promise.try(() => {
        return dataKindHelper.createDataKind();
      }).then((dataKind) => {
        const data = { ...dataKind, name: faker.random.words(2) };
        return requests.cput(app, `/api/data-kinds/${ dataKind._id }`, data);
      });
      return Promise.all([
        p.should.eventually.have.property('statusCode', 200),
        p.should.eventually.have.property('body').that.is.an('object')
      ]);
    });
  });
};

module.exports = testUpdateDataKind;
