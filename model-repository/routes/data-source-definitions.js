const express = require('express');

const blueprint = require('../blueprints/data-source-definitions');
const lift = require('../middlewares/lift-http');
const method = require('../core/methods/data-source-definitions');
const respond = require('../middlewares/respond');
const validate = require('../middlewares/validate');

const router = express.Router({ mergeParams: true });

/**
 * @api {post} /data-source-definitions Create data source definition
 * @apiName CreateDataSourceDefinition
 * @apiDescription Creates a data source definition.
 * @apiGroup DATA SOURCE DEFINITIONS
 *
 * @apiParam {String} name The name of the data source definition.
 * @apiParam {String} [dataInterfaceReferenceID] The data interface of the data source definition.
 * @apiParam {String[]} [dataKindReferenceIDs.dataKindReferenceID] The data kinds of the data source definition.
 * @apiParamExample {json} Request
 *   {
 *     "name": "Temperature in JSON Format over MQTT",
 *     "dataInterfaceReferenceID": "6b8b37d0-3f74-4d80-9669-7aafb545f9f8",
 *     "dataKindReferenceIDs": {
 *       "dataKindReferenceID": [
 *         "445a4277-0623-4318-a494-8308bd998f3f"
 *       ]
 *     }
 *   }
 *
 * @apiSuccess {String} id The ID of the data source definition.
 * @apiSuccess {String} name The name of the data source definition.
 * @apiSuccess {String} dataInterfaceReferenceID The data interface of the data source definition.
 * @apiSuccess {String[]} dataKindReferenceIDs.dataKindReferenceID The data kinds of the data source definition.
 * @apiSuccessExample Success
 *   HTTP/1.1 201 Created
 *   {
 *     "id": "a89524a9-e8f7-455c-857b-0380ff308412",
 *     "name": "Temperature in JSON Format over MQTT",
 *     "dataInterfaceReferenceID": "6b8b37d0-3f74-4d80-9669-7aafb545f9f8",
 *     "dataKindReferenceIDs": {
 *       "dataKindReferenceID": [
 *         "445a4277-0623-4318-a494-8308bd998f3f"
 *       ]
 *     }
 *   }
 *
 * @apiError (Error 400) DATA_INTERFACE_NOT_FOUND The data interface was not found.
 * @apiError (Error 400) DATA_KIND_NOT_FOUND One of the data kinds was not found.
 * @apiError (Error 400) MISSING_DATA_INTERFACE_REFERENCE_ID The data interface is missing.
 * @apiError (Error 400) MISSING_DATA_KIND_REFERENCE_IDS The data kinds are missing.
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
 *        -d '{ "name": "Temperature in JSON Format over MQTT", "dataInterfaceReferenceID": "6b8b37d0-3f74-4d80-9669-7aafb545f9f8", "dataKindReferenceIDs": { "dataKindReferenceID": [ "445a4277-0623-4318-a494-8308bd998f3f" ] } }' \
 *        -X POST http://localhost:8888/api/data-source-definitions
 */
router.route('/').post(validate(blueprint.createDataSourceDefinition),
  lift(method.createDataSourceDefinition), respond);

/**
 * @api {put} /data-source-definitions/:id Update data source definition
 * @apiName UpdateDataSourceDefinition
 * @apiDescription Updates a data source definition.
 * @apiGroup DATA SOURCE DEFINITIONS
 *
 * @apiParam {String} id The ID of the data source definition.
 * @apiParam {String} name The name of the data source definition.
 * @apiParam {String} dataInterfaceReferenceID The data interface of the data source definition.
 * @apiParam {String[]} dataKindReferenceIDs.dataKindReferenceID The data kinds of the data source definition.
 * @apiParamExample {json} Request
 *   {
 *     "name": "Temperature in JSON Format over MQTT",
 *     "dataInterfaceReferenceID": "6b8b37d0-3f74-4d80-9669-7aafb545f9f8",
 *     "dataKindReferenceIDs": {
 *       "dataKindReferenceID": [
 *         "445a4277-0623-4318-a494-8308bd998f3f"
 *       ]
 *     }
 *   }
 *
 * @apiSuccess {String} id The ID of the data source definition.
 * @apiSuccess {String} name The name of the data source definition.
 * @apiSuccess {String} dataInterfaceReferenceID The data interface of the data source definition.
 * @apiSuccess {String[]} dataKindReferenceIDs.dataKindReferenceID The data kinds of the data source definition.
 * @apiSuccessExample Success
 *   HTTP/1.1 200 OK
 *   {
 *     "id": "a89524a9-e8f7-455c-857b-0380ff308412",
 *     "name": "Temperature in JSON Format over MQTT",
 *     "dataInterfaceReferenceID": "6b8b37d0-3f74-4d80-9669-7aafb545f9f8",
 *     "dataKindReferenceIDs": {
 *       "dataKindReferenceID": [
 *         "445a4277-0623-4318-a494-8308bd998f3f"
 *       ]
 *     }
 *   }
 *
 * @apiError (Error 400) DATA_INTERFACE_NOT_FOUND The data interface was not found.
 * @apiError (Error 400) DATA_KIND_NOT_FOUND One of the data kinds was not found.
 * @apiError (Error 400) MISSING_DATA_INTERFACE_REFERENCE_ID The data interface is missing.
 * @apiError (Error 400) MISSING_DATA_KIND_REFERENCE_IDS The data kinds are missing.
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
 *        -d '{ "name": "Temperature in JSON Format over MQTT", "dataInterfaceReferenceID": "6b8b37d0-3f74-4d80-9669-7aafb545f9f8", "dataKindReferenceIDs": { "dataKindReferenceID": [ "445a4277-0623-4318-a494-8308bd998f3f" ] } }' \
 *        -X POST http://localhost:8888/api/data-source-definitions/a89524a9-e8f7-455c-857b-0380ff308412
 */
router.route('/:id').put(validate(blueprint.updateDataSourceDefinition),
  lift(method.updateDataSourceDefinition), respond);

/**
 * @api {delete} /data-source-definitions/:id Delete data source definition
 * @apiName DeleteDataSourceDefinition
 * @apiDescription Deletes a data source definition.
 * @apiGroup DATA SOURCE DEFINITIONS
 *
 * @apiSuccess {String} id The ID of the data source definition.
 *
 * @apiSuccessExample Success
 *   HTTP/1.1 204 No Content
 *
 * @apiError (Error 404) DATA_SOURCE_DEFINITION_NOT_FOUND The data source definition was not found.
 * @apiError (Error 500) FAILED The request failed.
 * @apiErrorExample Error
 *   HTTP/1.1 404 Not Found
 *   {
 *     "error": "DATA_SOURCE_DEFINITION_NOT_FOUND"
 *   }
 *
 * @apiExample {curl} Example
 *   curl -X DELETE http://localhost:8888/api/data-source-definitions/a89524a9-e8f7-455c-857b-0380ff308412
 */
router.route('/:id').delete(validate(blueprint.deleteDataSourceDefinition),
  lift(method.deleteDataSourceDefinition), respond);

/**
 * @api {get} /data-source-definitions/:id Get data source definition
 * @apiName GetDataSourceDefinition
 * @apiDescription Gets a data source definition.
 * @apiGroup DATA SOURCE DEFINITIONS
 *
 * @apiParam {String} id The ID of the data source definition.
 *
 * @apiSuccess {String} id The ID of the data source definition.
 * @apiSuccess {String} name The name of the data source definition.
 * @apiSuccess {String} dataInterfaceReferenceID The data interface of the data source definition.
 * @apiSuccess {String[]} dataKindReferenceIDs.dataKindReferenceID The data kinds of the data source definition.
 * @apiSuccessExample Success
 *   HTTP/1.1 200 OK
 *   {
 *     "id": "a89524a9-e8f7-455c-857b-0380ff308412",
 *     "name": "Temperature in JSON Format over MQTT",
 *     "dataInterfaceReferenceID": "6b8b37d0-3f74-4d80-9669-7aafb545f9f8",
 *     "dataKindReferenceIDs": {
 *       "dataKindReferenceID": [
 *         "445a4277-0623-4318-a494-8308bd998f3f"
 *       ]
 *     }
 *   }
 *
 * @apiError (Error 404) DATA_SOURCE_DEFINITION_NOT_FOUND The data source definition was not found.
 * @apiError (Error 500) FAILED The request failed.
 * @apiErrorExample Error
 *   HTTP/1.1 404 Not Found
 *   {
 *     "error": "DATA_SOURCE_DEFINITION_NOT_FOUND"
 *   }
 *
 * @apiExample {curl} Example
 *   curl -X GET http://localhost:8888/api/data-source-definitions/a89524a9-e8f7-455c-857b-0380ff308412
 */
router.route('/:id').get(validate(blueprint.getDataSourceDefinition),
  lift(method.getDataSourceDefinition), respond);

/**
 * @api {post} /data-source-definitions/discover Discover data source definitions
 * @apiName DiscoverDataSourceDefinitions
 * @apiDescription Discovers data source definitions.
 * @apiGroup DATA SOURCE DEFINITIONS
 *
 * @apiParam {String} [id] The ID of the data source definition.
 * @apiParam {String} [name] The name of the data source definition.
 * @apiSuccess {String} [dataInterfaceReferenceID] The data interface of the data source definition.
 * @apiSuccess {String} [dataKindReferenceID] The data kind of the data source definition.
 * @apiParamExample {json} Request
 *   {
 *     "dataKindReferenceID": "445a4277-0623-4318-a494-8308bd998f3f"
 *   }
 *
 * @apiSuccess {Object[]} dataSourceDefinitions The data source definitions that match the given criteria.
 * @apiSuccess {String} dataSourceDefinitions.id The ID of the data source definition.
 * @apiSuccess {String} dataSourceDefinitions.dataInterfaceReferenceID The data interface of the data source definition.
 * @apiSuccess {String[]} dataSourceDefinitions.dataKindReferenceIDs.dataKindReferenceID The data kinds of the data source definition.
 * @apiSuccessExample Success
 *   HTTP/1.1 200 OK
 *   {
 *     "dataSourceDefinitions": [
 *       {
 *         "id": "a89524a9-e8f7-455c-857b-0380ff308412",
 *         "name": "Temperature in JSON Format over MQTT",
 *         "dataInterfaceReferenceID": "6b8b37d0-3f74-4d80-9669-7aafb545f9f8",
 *         "dataKindReferenceIDs": {
 *           "dataKindReferenceID": [
 *             "445a4277-0623-4318-a494-8308bd998f3f"
 *           ]
 *         }
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
 *        -d '{ "dataKindReferenceID": "445a4277-0623-4318-a494-8308bd998f3f" }' \
 *        -X POST http://localhost:8888/api/data-source-definitions/discover
 */
router.route('/discover').post(validate(blueprint.discoverDataSourceDefinitions),
  lift(method.discoverDataSourceDefinitions), respond);

module.exports = router;
