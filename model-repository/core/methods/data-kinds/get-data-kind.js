const Promise = require('bluebird');

const DataKind = require('../../models/data-kind');
const errors = require('../../common/errors');
const logger = require('../../common/loggers').get('DATA-KINDS');

// Gets a data kind.
const getDataKind = (input) => {
  logger.debug(`Get data kind ${ input.id }.`);
  return Promise.try(() => {
    // Find the data kind with the given ID.
    return DataKind.findById(input.id);
  }).then((dataKind) => {
    // The data kind does not exist.
    if (!dataKind) {
      logger.error(`Data kind ${ input.id } does not exist.`);
      throw new errors.NotFoundError('DATA_KIND_NOT_FOUND');
    }
    logger.debug(`Got data kind ${ input.id }.`);
    return dataKind;
  }).catch((error) => {
    logger.error(`Failed to get data kind ${ input.id }.`, error);
    throw error;
  });
};

module.exports = getDataKind;
