const Promise = require('bluebird');

const DataKind = require('../../models/data-kind');
const errors = require('../../common/errors');
const logger = require('../../common/loggers').get('DATA-KINDS');

// Validates a data kind.
const validateDataKind = (dataKind) => {
  return Promise.try(() => {
    // The name must be unique among all data kinds.
    return DataKind.count({
      _id: {
        $ne: dataKind._id
      },
      name: dataKind.name
    }).then((exists) => {
      if (exists) {
        logger.error(`Name ${ dataKind.name } is taken.`);
        throw new errors.BadRequestError('NAME_TAKEN');
      }
      return null;
    });
  }).then(() => {
    return dataKind;
  });
};

module.exports = {
  validateDataKind
};
