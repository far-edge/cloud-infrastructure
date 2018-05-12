const Promise = require('bluebird');

const DataInterface = require('../../models/data-interface');
const errors = require('../../common/errors');
const logger = require('../../common/loggers').get('DATA-INTERFACES');

// Deletes a data interface.
const deleteDataInterface = (input) => {
  logger.debug(`Delete data interface ${ input.id }.`);
  return Promise.try(() => {
    // Find the data interface with the given ID.
    return DataInterface.findById(input.id);
  }).then((dataInterface) => {
    // The data interface does not exist.
    if (!dataInterface) {
      logger.error(`Data interface ${ input.id } does not exist.`);
      throw new errors.NotFoundError('DATA_INTERFACE_NOT_FOUND');
    }
    // Delete the data interface.
    return dataInterface.remove();
  }).then((_dataInterface) => {
    logger.debug(`Deleted data interface ${ input.id }.`);
    return null;
  }).catch((error) => {
    logger.error(`Failed to delete data interface ${ input.id }.`, error);
    throw error;
  });
};

module.exports = deleteDataInterface;
