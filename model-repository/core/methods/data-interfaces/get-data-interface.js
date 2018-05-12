const Promise = require('bluebird');

const DataInterface = require('../../models/data-interface');
const errors = require('../../common/errors');
const logger = require('../../common/loggers').get('DATA-INTERFACES');

// Gets a data interface.
const getDataInterface = (input) => {
  logger.debug(`Get data interface ${ input.id }.`);
  return Promise.try(() => {
    // Find the data interface with the given ID.
    return DataInterface.findById(input.id);
  }).then((dataInterface) => {
    // The data interface does not exist.
    if (!dataInterface) {
      logger.error(`Data interface ${ input.id } does not exist.`);
      throw new errors.NotFoundError('DATA_INTERFACE_NOT_FOUND');
    }
    logger.debug(`Got data interface ${ input.id }.`);
    return dataInterface;
  }).catch((error) => {
    logger.error(`Failed to get data interface ${ input.id }.`, error);
    throw error;
  });
};

module.exports = getDataInterface;
