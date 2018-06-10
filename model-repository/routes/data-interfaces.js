const express = require('express');

const blueprint = require('../blueprints/data-interfaces');
const lift = require('../middlewares/lift-http');
const method = require('../core/methods/data-interfaces');
const respond = require('../middlewares/respond');
const validate = require('../middlewares/validate');

const router = express.Router({ mergeParams: true });

/**
 * @api {post} /data-interfaces Create data interface
 * @apiName CreateDataInterface
 * @apiDescription Creates a data interface.
 * @apiGroup DATA INTERFACES
 *
 * @apiParam {String} name The name of the data interface.
 * @apiParam {String} [communicationProtocol] The protocol of the data interface (e.g., MQTT).
 * @apiParam {Object[]} [parameters.parameter] The parameters of the data interface.
 * @apiParam {String} parameters.parameter.name The name of the parameter.
 * @apiParam {String} [parameters.parameter.description] The description of the parameter.
 * @apiParam {String} [parameters.parameter.dataType] The type of the parameter (e.g., string).
 * @apiParam {String} [parameters.parameter.defaultValue] The default value of the parameter.
 * @apiParamExample {json} Request
 *   {
 *     "name": "Over MQTT",
 *     "communicationProtocol": "MQTT",
 *     "parameters": {
 *       "parameter": [
 *         {
 *           "name": "host",
 *           "description": "The host where the MQTT broker runs.",
 *           "dataType": "string"
 *         },
 *         {
 *           "name": "port",
 *           "description": "The port where the MQTT broker listens.",
 *           "dataType": "int"
 *         }
 *       ]
 *     }
 *   }
 *
 * @apiSuccess {String} _id The ID of the data interface.
 * @apiSuccess {String} name The name of the data interface.
 * @apiSuccess {String} [communicationProtocol] The protocol of the data interface (e.g., MQTT).
 * @apiSuccess {Object[]} [parameters.parameter] The parameters of the data interface.
 * @apiSuccess {String} parameters.parameter.name The name of the parameter.
 * @apiSuccess {String} [parameters.parameter.description] The description of the parameter.
 * @apiSuccess {String} [parameters.parameter.dataType] The type of the parameter (e.g., string).
 * @apiSuccess {String} [parameters.parameter.defaultValue] The default value of the parameter.
 * @apiSuccessExample Success
 *   HTTP/1.1 201 Created
 *   {
 *     "_id": "6b8b37d0-3f74-4d80-9669-7aafb545f9f8",
 *     "name": "Over MQTT",
 *     "communicationProtocol": "MQTT",
 *     "parameters": {
 *       "parameter": [
 *         {
 *           "name": "host",
 *           "description": "The host where the MQTT broker runs.",
 *           "dataType": "string"
 *         },
 *         {
 *           "name": "port",
 *           "description": "The port where the MQTT broker listens.",
 *           "dataType": "int"
 *         }
 *       ]
 *     }
 *   }
 *
 * @apiError (Error 400) DUPLICATE_PARAMETER_NAME There are two or more parameters with the same name.
 * @apiError (Error 400) MISSING_COMMUNICATION_PROTOCOL The protocol is missing.
 * @apiError (Error 400) MISSING_NAME The name is missing.
 * @apiError (Error 400) NAME_TAKEN The name is taken.
 * @apiError (Error 500) FAILED The request failed.
 * @apiErrorExample Error
 *   HTTP/1.1 400 Bad Request
 *   {
 *     "error": "NAME_TAKEN"
 *   }
 *
 * @apiExample {curl} Example
 *   curl -H 'Content-Type: application/json' \
 *        -d '{ "name": "Over MQTT", "communicationProtocol": "MQTT", "parameters": { "parameter": [ { "name": "host", "description": "The host where the MQTT broker runs.", "dataType": "string" }, { "name": "port", "description": "The port where the MQTT broker listens.", "dataType": "int" } ] } }' \
 *        -X POST http://localhost:8888/api/data-interfaces
 */
router.route('/').post(validate(blueprint.createDataInterface), lift(method.createDataInterface),
  respond);

/**
 * @api {put} /data-interfaces/:id Update data interface
 * @apiName UpdateDataInterface
 * @apiDescription Updates a data interface.
 * @apiGroup DATA INTERFACES
 *
 * @apiParam {String} id The ID of the data interface.
 * @apiParam {String} name The name of the data interface.
 * @apiParam {String} [communicationProtocol] The protocol of the data interface (e.g., MQTT).
 * @apiParam {Object[]} [parameters.parameter] The parameters of the data interface.
 * @apiParam {String} parameters.parameter.name The name of the parameter.
 * @apiParam {String} [parameters.parameter.description] The description of the parameter.
 * @apiParam {String} [parameters.parameter.dataType] The type of the parameter (e.g., string).
 * @apiParam {String} [parameters.parameter.defaultValue] The default value of the parameter.
 * @apiParamExample {json} Request
 *   {
 *     "name": "Over MQTT",
 *     "communicationProtocol": "MQTT",
 *     "parameters": {
 *       "parameter": [
 *         {
 *           "name": "host",
 *           "description": "The host where the MQTT broker runs.",
 *           "dataType": "string"
 *         },
 *         {
 *           "name": "port",
 *           "description": "The port where the MQTT broker listens.",
 *           "dataType": "int"
 *         }
 *       ]
 *     }
 *   }
 *
 * @apiSuccess {String} _id The ID of the data interface.
 * @apiSuccess {String} name The name of the data interface.
 * @apiSuccess {String} [communicationProtocol] The protocol of the data interface (e.g., MQTT).
 * @apiSuccess {Object[]} [parameters.parameter] The parameters of the data interface.
 * @apiSuccess {String} parameters.parameter.name The name of the parameter.
 * @apiSuccess {String} [parameters.parameter.description] The description of the parameter.
 * @apiSuccess {String} [parameters.parameter.dataType] The type of the parameter (e.g., string).
 * @apiSuccess {String} [parameters.parameter.defaultValue] The default value of the parameter.
 * @apiSuccessExample Success
 *   HTTP/1.1 200 OK
 *   {
 *     "_id": "6b8b37d0-3f74-4d80-9669-7aafb545f9f8",
 *     "name": "Over MQTT",
 *     "communicationProtocol": "MQTT",
 *     "parameters": {
 *       "parameter": [
 *         {
 *           "name": "host",
 *           "description": "The host where the MQTT broker runs.",
 *           "dataType": "string"
 *         },
 *         {
 *           "name": "port",
 *           "description": "The port where the MQTT broker listens.",
 *           "dataType": "int"
 *         }
 *       ]
 *     }
 *   }
 *
 * @apiError (Error 400) DUPLICATE_PARAMETER_NAME There are two or more parameters with the same name.
 * @apiError (Error 400) MISSING_COMMUNICATION_PROTOCOL The protocol is missing.
 * @apiError (Error 400) MISSING_NAME The name is missing.
 * @apiError (Error 400) NAME_TAKEN The name is taken.
 * @apiError (Error 404) DATA_INTERFACE_NOT_FOUND The data interface was not found.
 * @apiError (Error 500) FAILED The request failed.
 * @apiErrorExample Error
 *   HTTP/1.1 404 Not Found
 *   {
 *     "error": "DATA_INTERFACE_NOT_FOUND"
 *   }
 *
 * @apiExample {curl} Example
 *   curl -H 'Content-Type: application/json' \
 *        -d '{ "name": "Over MQTT", "communicationProtocol": "MQTT", "parameters": { "parameter": [ { "name": "host", "description": "The host where the MQTT broker runs.", "dataType": "string" }, { "name": "port", "description": "The port where the MQTT broker listens.", "dataType": "int" } ] } }' \
 *        -X POST http://localhost:8888/api/data-interfaces/6b8b37d0-3f74-4d80-9669-7aafb545f9f8
 */
router.route('/:id').put(validate(blueprint.updateDataInterface), lift(method.updateDataInterface),
  respond);

/**
 * @api {delete} /data-interfaces/:id Delete data interface
 * @apiName DeleteDataInterface
 * @apiDescription Deletes a data interface.
 * @apiGroup DATA INTERFACES
 *
 * @apiSuccess {String} id The ID of the data interface.
 *
 * @apiSuccessExample Success
 *   HTTP/1.1 204 No Content
 *
 * @apiError (Error 404) DATA_INTERFACE_NOT_FOUND The data interface was not found.
 * @apiError (Error 500) FAILED The request failed.
 * @apiErrorExample Error
 *   HTTP/1.1 404 Not Found
 *   {
 *     "error": "DATA_INTERFACE_NOT_FOUND"
 *   }
 *
 * @apiExample {curl} Example
 *   curl -X DELETE http://localhost:8888/api/data-interfaces/6b8b37d0-3f74-4d80-9669-7aafb545f9f8
 */
router.route('/:id').delete(validate(blueprint.deleteDataInterface), lift(method.deleteDataInterface),
  respond);

/**
 * @api {get} /data-interfaces/:id Get data interface
 * @apiName GetDataInterface
 * @apiDescription Gets a data interface.
 * @apiGroup DATA INTERFACES
 *
 * @apiParam {String} id The ID of the data interface.
 *
 * @apiSuccess {String} _id The ID of the data interface.
 * @apiSuccess {String} name The name of the data interface.
 * @apiSuccess {String} [communicationProtocol] The protocol of the data interface (e.g., MQTT).
 * @apiSuccess {Object[]} [parameters.parameter] The parameters of the data interface.
 * @apiSuccess {String} parameters.parameter.name The name of the parameter.
 * @apiSuccess {String} [parameters.parameter.description] The description of the parameter.
 * @apiSuccess {String} [parameters.parameter.dataType] The type of the parameter (e.g., string).
 * @apiSuccess {String} [parameters.parameter.defaultValue] The default value of the parameter.
 * @apiSuccessExample Success
 *   HTTP/1.1 200 OK
 *   {
 *     "_id": "6b8b37d0-3f74-4d80-9669-7aafb545f9f8",
 *     "name": "Over MQTT",
 *     "communicationProtocol": "MQTT",
 *     "parameters": {
 *       "parameter": [
 *         {
 *           "name": "host",
 *           "description": "The host where the MQTT broker runs.",
 *           "dataType": "string"
 *         },
 *         {
 *           "name": "port",
 *           "description": "The port where the MQTT broker listens.",
 *           "dataType": "int"
 *         }
 *       ]
 *     }
 *   }
 *
 * @apiError (Error 404) DATA_INTERFACE_NOT_FOUND The data interface was not found.
 * @apiError (Error 500) FAILED The request failed.
 * @apiErrorExample Error
 *   HTTP/1.1 404 Not Found
 *   {
 *     "error": "DATA_INTERFACE_NOT_FOUND"
 *   }
 *
 * @apiExample {curl} Example
 *   curl -X GET http://localhost:8888/api/data-interfaces/6b8b37d0-3f74-4d80-9669-7aafb545f9f8
 */
router.route('/:id').get(validate(blueprint.getDataInterface), lift(method.getDataInterface),
  respond);

/**
 * @api {post} /data-interfaces/discover Discover data interfaces
 * @apiName DiscoverDataInterfaces
 * @apiDescription Discovers data interfaces.
 * @apiGroup DATA INTERFACES
 *
 * @apiParam {String} [name] The name of the data interface.
 * @apiParam {String} [communicationProtocol] The protocol of the data interface (e.g., MQTT).
 * @apiParamExample {json} Request
 *   {
 *     "communicationProtocol": "MQTT"
 *   }
 *
 * @apiSuccess {Object[]} dataInterfaces The data interfaces that match the given criteria.
 * @apiSuccess {String} dataInterfaces._id The ID of the data interface.
 * @apiSuccess {String} dataInterfaces.name The name of the data interface.
 * @apiSuccess {String} [dataInterfaces.communicationProtocol] The protocol of the data interface (e.g., MQTT).
 * @apiSuccess {Object[]} [dataInterfaces.parameters.parameter] The parameters of the data interface.
 * @apiSuccess {String} dataInterfaces.parameters.parameter.name The name of the parameter.
 * @apiSuccess {String} [dataInterfaces.parameters.parameter.description] The description of the parameter.
 * @apiSuccess {String} [dataInterfaces.parameters.parameter.dataType] The type of the parameter (e.g., string).
 * @apiSuccess {String} [dataInterfaces.parameters.parameter.defaultValue] The default value of the parameter.
 * @apiSuccessExample Success
 *   HTTP/1.1 200 OK
 *   {
 *     "dataInterfaces": [
 *       "_id": "6b8b37d0-3f74-4d80-9669-7aafb545f9f8",
 *       "name": "Over MQTT",
 *       "communicationProtocol": "MQTT",
 *       "parameters": {
 *         "parameter": [
 *           {
 *             "name": "host",
 *             "description": "The host where the MQTT broker runs.",
 *             "dataType": "string"
 *           },
 *           {
 *             "name": "port",
 *             "description": "The port where the MQTT broker listens.",
 *             "dataType": "int"
 *           }
 *         ]
 *       }
 *     ]
 *   }
 *
 *
 * @apiError (Error 500) FAILED The request failed.
 * @apiErrorExample Error
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *     "error": "FAILED"
 *   }
 *
 * @apiExample {curl} Example
 *   curl -H 'Content-Type: application/json' \
 *        -d '{ "communicationProtocol": "MQTT" }' \
 *        -X POST http://localhost:8888/api/data-interfaces/discover
 */
router.route('/discover').post(validate(blueprint.discoverDataInterfaces),
  lift(method.discoverDataInterfaces), respond);

module.exports = router;
