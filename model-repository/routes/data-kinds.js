const express = require('express');

const blueprint = require('../blueprints/data-kinds');
const lift = require('../middlewares/lift-http');
const method = require('../core/methods/data-kinds');
const respond = require('../middlewares/respond');
const validate = require('../middlewares/validate');

const router = express.Router({ mergeParams: true });

/**
 * @api {post} /data-kinds Create data kind
 * @apiName CreateDataKind
 * @apiDescription Creates a data kind.
 * @apiGroup DATA KINDS
 *
 * @apiParam {String} name The name of the data kind.
 * @apiParam {String} [description] The description of the data kind.
 * @apiParam {String} [modelType] The model type of the data kind (e.g., SenML).
 * @apiParam {String} [format] The format of the data kind (e.g., JSON).
 * @apiParam {String} quantityKind The kind of the quantity of the data kind (e.g., Temperature).
 * @apiParamExample {json} Request
 *   {
 *     "name": "Temperature (in C) in JSON",
 *     "description": "Temperature values (in Celcius) in JSON format.",
 *     "format": "JSON",
 *     "quantityKind": "Temperature"
 *   }
 *
 * @apiSuccess {String} _id The ID of the data kind.
 * @apiSuccess {String} name The name of the data kind.
 * @apiSuccess {String} [description] The description of the data kind.
 * @apiSuccess {String} [modelType] The model type of the data kind (e.g., SenML).
 * @apiSuccess {String} [format] The format of the data kind (e.g., JSON).
 * @apiSuccess {String} quantityKind The kind of the quantity of the data kind (e.g., Temperature).
 * @apiSuccessExample Success
 *   HTTP/1.1 201 Created
 *   {
 *     "_id": "445a4277-0623-4318-a494-8308bd998f3f",
 *     "name": "Temperature (in C) in JSON",
 *     "description": "Temperature values (in Celcius) in JSON format.",
 *     "format": "JSON",
 *     "quantityKind": "Temperature"
 *   }
 *
 * @apiError (Error 400) MISSING_NAME The name is missing.
 * @apiError (Error 400) MISSING_QUANTITY_KIND The quantity kind is missing.
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
 *        -d '{ "name": "Temperature (in C) in JSON", "description": "Temperature values (in Celcius) in JSON format.", "format": "JSON", "quantityKind": "Temperature" }' \
 *        -X POST http://localhost:8888/api/data-kinds
 */
router.route('/').post(validate(blueprint.createDataKind), lift(method.createDataKind), respond);

/**
 * @api {put} /data-kinds/:id Update data kind
 * @apiName UpdateDataKind
 * @apiDescription Updates a data kind.
 * @apiGroup DATA KINDS
 *
 * @apiParam {String} id The ID of the data kind.
 * @apiParam {String} name The name of the data kind.
 * @apiParam {String} [description] The description of the data kind.
 * @apiParam {String} [modelType] The model type of the data kind (e.g., SenML).
 * @apiParam {String} [format] The format of the data kind (e.g., JSON).
 * @apiParam {String} quantityKind The kind of the quantity of the data kind (e.g., Temperature).
 * @apiParamExample {json} Request
 *   {
 *     "name": "Temperature (in C) in JSON",
 *     "description": "Temperature values (in Celcius) in JSON format.",
 *     "format": "JSON",
 *     "quantityKind": "Temperature"
 *   }
 *
 * @apiSuccess {String} _id The ID of the data kind.
 * @apiSuccess {String} name The name of the data kind.
 * @apiSuccess {String} [description] The description of the data kind.
 * @apiSuccess {String} [modelType] The model type of the data kind (e.g., SenML).
 * @apiSuccess {String} [format] The format of the data kind (e.g., JSON).
 * @apiSuccess {String} quantityKind The kind of the quantity of the data kind (e.g., Temperature).
 * @apiSuccessExample Success
 *   HTTP/1.1 200 OK
 *   {
 *     "_id": "445a4277-0623-4318-a494-8308bd998f3f",
 *     "name": "Temperature (in C) in JSON",
 *     "description": "Temperature values (in Celcius) in JSON format.",
 *     "format": "JSON",
 *     "quantityKind": "Temperature"
 *   }
 *
 * @apiError (Error 400) MISSING_NAME The name is missing.
 * @apiError (Error 400) MISSING_QUANTITY_KIND The quantity kind is missing.
 * @apiError (Error 400) NAME_TAKEN The name is taken.
 * @apiError (Error 404) DATA_KIND_NOT_FOUND The data kind was not found.
 * @apiError (Error 500) FAILED The request failed.
 * @apiErrorExample Error
 *   HTTP/1.1 404 Not Found
 *   {
 *     "error": "DATA_KIND_NOT_FOUND"
 *   }
 *
 * @apiExample {curl} Example
 *   curl -H 'Content-Type: application/json' \
 *        -d '{ "name": "Temperature (in C) in JSON", "description": "Temperature values (in Celcius) in JSON format.", "format": "JSON", "quantityKind": "Temperature" }' \
 *        -X POST http://localhost:8888/api/data-kinds/445a4277-0623-4318-a494-8308bd998f3f
 */
router.route('/:id').put(validate(blueprint.updateDataKind), lift(method.updateDataKind), respond);

/**
 * @api {delete} /data-kinds/:id Delete data kind
 * @apiName DeleteDataKind
 * @apiDescription Deletes a data kind.
 * @apiGroup DATA KINDS
 *
 * @apiSuccess {String} id The ID of the data kind.
 *
 * @apiSuccessExample Success
 *   HTTP/1.1 204 No Content
 *
 * @apiError (Error 404) DATA_KIND_NOT_FOUND The data kind was not found.
 * @apiError (Error 500) FAILED The request failed.
 * @apiErrorExample Error
 *   HTTP/1.1 404 Not Found
 *   {
 *     "error": "DATA_KIND_NOT_FOUND"
 *   }
 *
 * @apiExample {curl} Example
 *   curl -X DELETE http://localhost:8888/api/data-kinds/445a4277-0623-4318-a494-8308bd998f3f
 */
router.route('/:id').delete(validate(blueprint.deleteDataKind), lift(method.deleteDataKind),
  respond);

/**
 * @api {get} /data-kinds/:id Get data kind
 * @apiName GetDataKind
 * @apiDescription Gets a data kind.
 * @apiGroup DATA KINDS
 *
 * @apiParam {String} id The ID of the data kind.
 *
 * @apiSuccess {String} _id The ID of the data kind.
 * @apiSuccess {String} name The name of the data kind.
 * @apiSuccess {String} [description] The description of the data kind.
 * @apiSuccess {String} [modelType] The model type of the data kind (e.g., SenML).
 * @apiSuccess {String} [format] The format of the data kind (e.g., JSON).
 * @apiSuccess {String} quantityKind The kind of the quantity of the data kind (e.g., Temperature).
 * @apiSuccessExample Success
 *   HTTP/1.1 200 OK
 *   {
 *     "_id": "445a4277-0623-4318-a494-8308bd998f3f",
 *     "name": "Temperature (in C) in JSON",
 *     "description": "Temperature values (in Celcius) in JSON format.",
 *     "format": "JSON",
 *     "quantityKind": "Temperature"
 *   }
 *
 * @apiError (Error 404) DATA_KIND_NOT_FOUND The data kind was not found.
 * @apiError (Error 500) FAILED The request failed.
 * @apiErrorExample Error
 *   HTTP/1.1 404 Not Found
 *   {
 *     "error": "DATA_KIND_NOT_FOUND"
 *   }
 *
 * @apiExample {curl} Example
 *   curl -X GET http://localhost:8888/api/data-kinds/445a4277-0623-4318-a494-8308bd998f3f
 */
router.route('/:id').get(validate(blueprint.getDataKind), lift(method.getDataKind), respond);

/**
 * @api {post} /data-kinds/search Search for data kinds
 * @apiName SearchDataKinds
 * @apiDescription Searches for data kinds.
 * @apiGroup DATA KINDS
 *
 * @apiParam {String} [name] The name of the data kind.
 * @apiParam {String} [description] The description of the data kind.
 * @apiParam {String} [modelType] The model type of the data kind (e.g., SenML).
 * @apiParam {String} [format] The format of the data kind (e.g., JSON).
 * @apiParam {String} [quantityKind] The kind of the quantity of the data kind (e.g., Temperature).
 * @apiParamExample {json} Request
 *   {
 *     "name": "Temperature (in C) in JSON",
 *     "description": "Temperature values (in Celcius) in JSON format.",
 *     "format": "JSON",
 *     "quantityKind": "Temperature"
 *   }
 *
 * @apiSuccess {Object[]} dataKinds The data kinds that match the given criteria.
 * @apiSuccess {String} dataKinds._id The ID of the data kind.
 * @apiSuccess {String} dataKinds.name The name of the data kind.
 * @apiSuccess {String} [dataKinds.description] The description of the data kind.
 * @apiSuccess {String} [dataKinds.modelType] The model type of the data kind (e.g., SenML).
 * @apiSuccess {String} [dataKinds.format] The format of the data kind (e.g., JSON).
 * @apiSuccess {String} dataKinds.quantityKind The kind of the quantity of the data kind (e.g., Temperature).
 * @apiSuccessExample Success
 *   HTTP/1.1 200 OK
 *   {
 *     "dataKinds": [
 *       "id": "445a4277-0623-4318-a494-8308bd998f3f",
 *       "name": "Temperature (in C) in JSON",
 *       "description": "Temperature values (in Celcius) in JSON format.",
 *       "format": "JSON",
 *       "quantityKind": "Temperature"
 *     ]
 *   }
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
 *        -d '{ "format": "JSON" }' \
 *        -X POST http://localhost:8888/api/data-kinds/search
 */
router.route('/search').post(validate(blueprint.searchDataKinds), lift(method.searchDataKinds),
  respond);

module.exports = router;
