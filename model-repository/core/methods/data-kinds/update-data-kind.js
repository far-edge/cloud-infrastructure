const Promise = require('bluebird');

const common = require('./common');
const DataKind = require('../../models/data-kind');
const errors = require('../../common/errors');
const logger = require('../../common/loggers').get('DATA-KINDS');

// Updates a data kind.
const updateDataKind = (input) => {
  logger.debug(`Update data kind ${ input.id }.`);
  return Promise.try(() => {
    // Find the data kind with the given ID.
    return DataKind.findById(input.id);
  }).then((dataKind) => {
    // The data kind does not exist.
    if (!dataKind) {
      logger.error(`Data kind ${ input.id } does not exist.`);
      throw new errors.NotFoundError('DATA_KIND_NOT_FOUND');
    }
    // Change the data kind.
    dataKind.name = input.name;
    dataKind.description = input.description;
    dataKind.modelType = input.modelType;
    dataKind.format = input.format;
    dataKind.quantityKind = input.quantityKind;
    // Validate the data kind.
    return common.validateDataKind(dataKind);
  }).then((dataKind) => {
    // Save the data kind.
    return dataKind.save();
  }).then((dataKind) => {
    logger.debug(`Updated data kind ${ input.id }.`);
    return dataKind;
  }).catch((error) => {
    logger.error(`Failed to update data kind ${ input.id }.`, error);
    throw error;
  });
};

module.exports = updateDataKind;
