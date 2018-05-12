const Promise = require('bluebird');

const DataInterface = require('../../models/data-interface');
const DataKind = require('../../models/data-kind');
const DataSourceDefinition = require('../../models/data-source-definition');
const errors = require('../../common/errors');
const logger = require('../../common/loggers').get('DATA-SOURCE_DEFINITIONS');

// Validates a data source definition.
const validateDataSourceDefinition = (dataSourceDefinition) => {
  return Promise.try(() => {
    // The name must be unique among all data source definitions.
    return DataSourceDefinition.count({
      _id: {
        $ne: dataSourceDefinition._id
      },
      name: dataSourceDefinition.name
    }).then((exists) => {
      if (exists) {
        logger.error(`Name ${ dataSourceDefinition.name } is taken.`);
        throw new errors.BadRequestError('NAME_TAKEN');
      }
      return null;
    });
  }).then(() => {
    // The data interface must exist.
    const id = dataSourceDefinition.dataInterfaceReferenceID;
    return DataInterface.count({
      _id: id
    }).then((exists) => {
      if (!exists) {
        logger.error(`Data interface ${ id } does not exist.`);
        throw new errors.BadRequestError('DATA_INTERFACE_NOT_FOUND');
      }
      return null;
    });
  }).then(() => {
    // All data kidns must exist.
    const ids = dataSourceDefinition.dataKindReferenceIDs.dataKindReferenceID;
    return Promise.map(ids, (id) => {
      return DataKind.count({
        _id: id
      }).then((exists) => {
        if (!exists) {
          logger.error(`Data kind ${ id } does not exist.`);
          throw new errors.BadRequestError('DATA_KIND_NOT_FOUND');
        }
        return null;
      });
    });
  }).then(() => {
    return dataSourceDefinition;
  });
};

module.exports = {
  validateDataSourceDefinition
};
