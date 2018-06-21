const Promise = require('bluebird');

const common = require('./common');
const DataInterface = require('../../models/data-interface');
const errors = require('../../common/errors');
const logger = require('../../common/loggers').get('DATA-INTERFACES');

// Updates a data interface.
const updateDataInterface = (input) => {
  logger.debug(`Update data interface ${ input.id }.`);
  return Promise.try(() => {
    // Find the data interface with the given ID.
    return DataInterface.findById(input.id);
  }).then((dataInterface) => {
    // The data interface does not exist.
    if (!dataInterface) {
      logger.error(`Data interface ${ input.id } does not exist.`);
      throw new errors.NotFoundError('DATA_INTERFACE_NOT_FOUND');
    }
    // Change the data interface.
    dataInterface.name = input.name;
    dataInterface.description = input.description;
    dataInterface.communicationProtocol = input.communicationProtocol;
    dataInterface.parameters = input.parameters;
    // Validate the data interface.
    return common.validateDataInterface(dataInterface);
  }).then((dataInterface) => {
    // Save the data interface.
    return dataInterface.save();
  }).then((dataInterface) => {
    logger.debug(`Updated data interface ${ input.id }.`);
    return dataInterface;
  }).catch((error) => {
    logger.error(`Failed to update data interface ${ input.id }.`, error);
    throw error;
  });
};

module.exports = updateDataInterface;
