const Promise = require('bluebird');

const DataKind = require('../../models/data-kind');
const errors = require('../../common/errors');
const logger = require('../../common/loggers').get('DATA-KINDS');

// Deletes a data kind.
const deleteDataKind = (input) => {
  logger.debug(`Delete data kind ${ input.id }.`);
  return Promise.try(() => {
    // Find the data kind with the given ID.
    return DataKind.findById(input.id);
  }).then((dataKind) => {
    // The data kind does not exist.
    if (!dataKind) {
      logger.error(`Data kind ${ input.id } does not exist.`);
      throw new errors.NotFoundError('DATA_KIND_NOT_FOUND');
    }
    // Delete the data kind.
    return dataKind.remove();
  }).then(() => {
    logger.debug(`Deleted data kind ${ input.id }.`);
    return null;
  }).catch((error) => {
    logger.error(`Failed to delete data kind ${ input.id }.`, error);
    throw error;
  });
};

module.exports = deleteDataKind;
