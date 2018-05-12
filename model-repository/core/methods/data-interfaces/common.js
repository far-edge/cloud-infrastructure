const Promise = require('bluebird');

const chisels = require('../../common/chisels');
const DataInterface = require('../../models/data-interface');
const errors = require('../../common/errors');
const logger = require('../../common/loggers').get('DATA-INTERFACES');

// Validates a data interface.
const validateDataInterface = (dataInterface) => {
  return Promise.try(() => {
    // The name must be unique among all data interfaces.
    return DataInterface.count({
      _id: {
        $ne: dataInterface._id
      },
      name: dataInterface.name
    }).then((exists) => {
      if (exists) {
        logger.error(`Name ${ dataInterface.name } is taken.`);
        throw new errors.BadRequestError('NAME_TAKEN');
      }
      return null;
    });
  }).then(() => {
    // All parameters must have unique names.
    const parameters = dataInterface.parameters ? dataInterface.parameters.parameter || [] : [];
    const nparameters = parameters.length;
    const nnames = chisels.distinct(parameters.map((p) => { return p.name; })).length;
    if (nnames < nparameters) {
      logger.error('There are more than one parameters with the same name.');
      throw new errors.BadRequestError('DUPLICATE_PARAMETER_NAME');
    }
    return null;
  }).then(() => {
    return dataInterface;
  });
};

module.exports = {
  validateDataInterface
};
