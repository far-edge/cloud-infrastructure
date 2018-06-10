const express = require('express');

const blueprint = require('../blueprints/analytics-processor-definitions');
const lift = require('../middlewares/lift-http');
const method = require('../core/methods/analytics-processor-definitions');
const respond = require('../middlewares/respond');
const validate = require('../middlewares/validate');

const router = express.Router({ mergeParams: true });

/**
 * @api {post} /analytics-processor-definitions Create analytics processor definition
 * @apiName CreateAnalyticsProcessorDefinition
 * @apiDescription Creates an analytics processor definition.
 * @apiGroup ANALYTICS PROCESSOR DEFINITIONS
 *
 * @apiParam {String} name The name of the analytics processor definition.
 * @apiParam {String} [description] The description of the analytics processor definition.
 * @apiParam {String} processorType The processor type of the analytics processor definition.
 * @apiParam {String} [version] The version of the analytics processor definition.
 * @apiParam {String} [copyright] The copyright of the analytics processor definition.
 * @apiParam {String} [processorLocation] The location of the library of the analytics processor definition.
 * @apiParam {String[]} [additionalInformation] Additional information about the analytics processor definition.
 * @apiParam {Object[]} [parameters.parameter] The parameters of the analytics processor definition.
 * @apiParam {String} parameters.parameter.name The name of the parameter.
 * @apiParam {String} [parameters.parameter.description] The description of the parameter.
 * @apiParam {String} [parameters.parameter.dataType] The type of the parameter (e.g., string).
 * @apiParam {String} [parameters.parameter.defaultValue] The default value of the parameter.
 * @apiParamExample {json} Request
 *   {
 *     "name": "Average calculator",
 *     "description": "Represents processors that read values from their source, calculate the running average, and write it to their sink.",
 *     "processorType": "average",
 *     "version": "1.0.0"
 *   }
 *
 * @apiSuccess {String} _id The ID of the analytics processor definition.
 * @apiSuccess {String} name The name of the analytics processor definition.
 * @apiSuccess {String} [description] The description of the analytics processor definition.
 * @apiSuccess {String} processorType The processor type of the analytics processor definition.
 * @apiSuccess {String} [version] The version of the analytics processor definition.
 * @apiSuccess {String} [copyright] The copyright of the analytics processor definition.
 * @apiSuccess {String} [processorLocation] The location of the library of the analytics processor definition.
 * @apiSuccess {String[]} [additionalInformation] Additional information about the analytics processor definition.
 * @apiSuccess {Object[]} [parameters.parameter] The parameters of the analytics processor definition.
 * @apiSuccess {String} parameters.parameter.name The name of the parameter.
 * @apiSuccess {String} [parameters.parameter.description] The description of the parameter.
 * @apiSuccess {String} [parameters.parameter.dataType] The type of the parameter (e.g., string).
 * @apiSuccess {String} [parameters.parameter.defaultValue] The default value of the parameter.
 * @apiSuccessExample Success
 *   HTTP/1.1 201 Created
 *   {
 *     "id": "5376c0aa-a93a-49e7-a5d9-16ff56d2e014",
 *     "name": "Average calculator",
 *     "description": "Represents processors that read values from their source, calculate the running average, and write it to their sink.",
 *     "processorType": "average",
 *     "version": "1.0.0"
 *   }
 *
 * @apiError (Error 400) DUPLICATE_PARAMETER_NAME There are two or more parameters with the same name.
 * @apiError (Error 400) MISSING_NAME The name is missing.
 * @apiError (Error 400) MISSING_PROCESSOR_TYPE The processor type is missing.
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
 *        -d '{ "name": "Average calculator", "description": "Represents processors that read values from their source, calculate the running average, and write it to their sink.", "processorType": "average", "version": "1.0.0" }' \
 *        -X POST http://localhost:8888/api/analytics-processor-definitions
 */
router.route('/').post(validate(blueprint.createAnalyticsProcessorDefinition),
  lift(method.createAnalyticsProcessorDefinition), respond);

/**
 * @api {put} /analytics-processor-definitions/:id Update analytics processor definition
 * @apiName UpdateAnalyticsProcessorDefinition
 * @apiDescription Updates a analytics processor definition.
 * @apiGroup ANALYTICS PROCESSOR DEFINITIONS
 *
 * @apiParam {String} id The ID of the analytics processor definition.
 * @apiParam {String} name The name of the analytics processor definition.
 * @apiParam {String} [description] The description of the analytics processor definition.
 * @apiParam {String} processorType The processor type of the analytics processor definition.
 * @apiParam {String} [version] The version of the analytics processor definition.
 * @apiParam {String} [copyright] The copyright of the analytics processor definition.
 * @apiParam {String} [processorLocation] The location of the library of the analytics processor definition.
 * @apiParam {String[]} [additionalInformation] Additional information about the analytics processor definition.
 * @apiParam {Object[]} [parameters.parameter] The parameters of the analytics processor definition.
 * @apiParam {String} parameters.parameter.name The name of the parameter.
 * @apiParam {String} [parameters.parameter.description] The description of the parameter.
 * @apiParam {String} [parameters.parameter.dataType] The type of the parameter (e.g., string).
 * @apiParam {String} [parameters.parameter.defaultValue] The default value of the parameter.
 * @apiParamExample {json} Request
 *   {
 *     "name": "Average calculator",
 *     "description": "Represents processors that read values from their source, calculate the running average, and write it to their sink.",
 *     "processorType": "average",
 *     "version": "1.0.0"
 *   }
 *
 * @apiSuccess {String} _id The ID of the analytics processor definition.
 * @apiSuccess {String} name The name of the analytics processor definition.
 * @apiSuccess {String} [description] The description of the analytics processor definition.
 * @apiSuccess {String} processorType The processor type of the analytics processor definition.
 * @apiSuccess {String} [version] The version of the analytics processor definition.
 * @apiSuccess {String} [copyright] The copyright of the analytics processor definition.
 * @apiSuccess {String} [processorLocation] The location of the library of the analytics processor definition.
 * @apiSuccess {String[]} [additionalInformation] Additional information about the analytics processor definition.
 * @apiSuccess {Object[]} [parameters.parameter] The parameters of the analytics processor definition.
 * @apiSuccess {String} parameters.parameter.name The name of the parameter.
 * @apiSuccess {String} [parameters.parameter.description] The description of the parameter.
 * @apiSuccess {String} [parameters.parameter.dataType] The type of the parameter (e.g., string).
 * @apiSuccess {String} [parameters.parameter.defaultValue] The default value of the parameter.
 * @apiSuccessExample Success
 *   HTTP/1.1 200 OK
 *   {
 *     "id": "5376c0aa-a93a-49e7-a5d9-16ff56d2e014",
 *     "name": "Average calculator",
 *     "description": "Represents processors that read values from their source, calculate the running average, and write it to their sink.",
 *     "processorType": "average",
 *     "version": "1.0.0"
 *   }
 *
 * @apiError (Error 400) DUPLICATE_PARAMETER_NAME There are two or more parameters with the same name.
 * @apiError (Error 400) MISSING_NAME The name is missing.
 * @apiError (Error 400) MISSING_PROCESSOR_TYPE The processor type is missing.
 * @apiError (Error 400) NAME_TAKEN The name is taken.
 * @apiError (Error 404) ANALYTICS_PROCESSOR_DEFINITION_NOT_FOUND The analytics processor definition was not found.
 * @apiError (Error 500) FAILED The request failed.
 * @apiErrorExample Error
 *   HTTP/1.1 404 Not Found
 *   {
 *     "error": "ANALYTICS_PROCESSOR_DEFINITION_NOT_FOUND"
 *   }
 *
 * @apiExample {curl} Example
 *   curl -H 'Content-Type: application/json' \
 *        -d '{ "name": "Average calculator", "description": "Represents processors that read values from their source, calculate the running average, and write it to their sink.", "processorType": "average", "version": "1.0.0" }' \
 *        -X POST http://localhost:8888/api/analytics-processor-definitions/5376c0aa-a93a-49e7-a5d9-16ff56d2e014
 */
router.route('/:id').put(validate(blueprint.updateAnalyticsProcessorDefinition),
  lift(method.updateAnalyticsProcessorDefinition), respond);

/**
 * @api {delete} /analytics-processor-definitions/:id Delete analytics processor definition
 * @apiName DeleteAnalyticsProcessorDefinition
 * @apiDescription Deletes a analytics processor definition.
 * @apiGroup ANALYTICS PROCESSOR DEFINITIONS
 *
 * @apiSuccess {String} id The ID of the analytics processor definition.
 *
 * @apiSuccessExample Success
 *   HTTP/1.1 204 No Content
 *
 * @apiError (Error 404) ANALYTICS_PROCESSOR_DEFINITION_NOT_FOUND The analytics processor definition was not found.
 * @apiError (Error 500) FAILED The request failed.
 * @apiErrorExample Error
 *   HTTP/1.1 404 Not Found
 *   {
 *     "error": "ANALYTICS_PROCESSOR_DEFINITION_NOT_FOUND"
 *   }
 *
 * @apiExample {curl} Example
 *   curl -X DELETE http://localhost:8888/api/analytics-processor-definitions/5376c0aa-a93a-49e7-a5d9-16ff56d2e014
 */
router.route('/:id').delete(validate(blueprint.deleteAnalyticsProcessorDefinition),
  lift(method.deleteAnalyticsProcessorDefinition), respond);

/**
 * @api {get} /analytics-processor-definitions/:id Get analytics processor definition
 * @apiName GetAnalyticsProcessorDefinition
 * @apiDescription Gets a analytics processor definition.
 * @apiGroup ANALYTICS PROCESSOR DEFINITIONS
 *
 * @apiParam {String} id The ID of the analytics processor definition.
 *
 * @apiSuccess {String} _id The ID of the analytics processor definition.
 * @apiSuccess {String} name The name of the analytics processor definition.
 * @apiSuccess {String} [description] The description of the analytics processor definition.
 * @apiSuccess {String} processorType The processor type of the analytics processor definition.
 * @apiSuccess {String} [version] The version of the analytics processor definition.
 * @apiSuccess {String} [copyright] The copyright of the analytics processor definition.
 * @apiSuccess {String} [processorLocation] The location of the library of the analytics processor definition.
 * @apiSuccess {String[]} [additionalInformation] Additional information about the analytics processor definition.
 * @apiSuccess {Object[]} [parameters.parameter] The parameters of the analytics processor definition.
 * @apiSuccess {String} parameters.parameter.name The name of the parameter.
 * @apiSuccess {String} [parameters.parameter.description] The description of the parameter.
 * @apiSuccess {String} [parameters.parameter.dataType] The type of the parameter (e.g., string).
 * @apiSuccess {String} [parameters.parameter.defaultValue] The default value of the parameter.
 * @apiSuccessExample Success
 *   HTTP/1.1 200 OK
 *   {
 *     "id": "5376c0aa-a93a-49e7-a5d9-16ff56d2e014",
 *     "name": "Average calculator",
 *     "description": "Represents processors that read values from their source, calculate the running average, and write it to their sink.",
 *     "processorType": "average",
 *     "version": "1.0.0"
 *   }
 *
 * @apiError (Error 404) ANALYTICS_PROCESSOR_DEFINITION_NOT_FOUND The analytics processor definition was not found.
 * @apiError (Error 500) FAILED The request failed.
 * @apiErrorExample Error
 *   HTTP/1.1 404 Not Found
 *   {
 *     "error": "ANALYTICS_PROCESSOR_DEFINITION_NOT_FOUND"
 *   }
 *
 * @apiExample {curl} Example
 *   curl -X GET http://localhost:8888/api/analytics-processor-definitions/5376c0aa-a93a-49e7-a5d9-16ff56d2e014
 */
router.route('/:id').get(validate(blueprint.getAnalyticsProcessorDefinition),
  lift(method.getAnalyticsProcessorDefinition), respond);

/**
 * @api {post} /analytics-processor-definitions/discover Discover analytics processor definitions
 * @apiName DiscoverAnalyticsProcessorDefinitions
 * @apiDescription Discovers analytics processor definitions.
 * @apiGroup ANALYTICS PROCESSOR DEFINITIONS
 *
 * @apiParam {String} [name] The name of the analytics processor definition.
 * @apiParam {String} [processorType] The processor type of the analytics processor definition.
 * @apiParam {String} [version] The version of the analytics processor definition.
 * @apiParamExample {json} Request
 *   {
 *     "processorType": "average"
 *   }
 *
 * @apiSuccess {Object[]} analyticsProcessorDefinitions The analytics processor definitions that match the given criteria.
 * @apiSuccess {String} analyticsProcessorDefinitions._id The ID of the analytics processor definition.
 * @apiSuccess {String} analyticsProcessorDefinitions.name The name of the analytics processor definition.
 * @apiSuccess {String} [analyticsProcessorDefinitions.description] The description of the analytics processor definition.
 * @apiSuccess {String} analyticsProcessorDefinitions.processorType The processor type of the analytics processor definition.
 * @apiSuccess {String} [analyticsProcessorDefinitions.version] The version of the analytics processor definition.
 * @apiSuccess {String} [analyticsProcessorDefinitions.copyright] The copyright of the analytics processor definition.
 * @apiSuccess {String} [analyticsProcessorDefinitions.processorLocation] The location of the library of the analytics processor definition.
 * @apiSuccess {String[]} [analyticsProcessorDefinitions.additionalInformation] Additional information about the analytics processor definition.
 * @apiSuccess {Object[]} [analyticsProcessorDefinitions.parameters.parameter] The parameters of the analytics processor definition.
 * @apiSuccess {String} analyticsProcessorDefinitions.parameters.parameter.name The name of the parameter.
 * @apiSuccess {String} [analyticsProcessorDefinitions.parameters.parameter.description] The description of the parameter.
 * @apiSuccess {String} [analyticsProcessorDefinitions.parameters.parameter.dataType] The type of the parameter (e.g., string).
 * @apiSuccess {String} [analyticsProcessorDefinitions.parameters.parameter.defaultValue] The default value of the parameter.
 * @apiSuccessExample Success
 *   HTTP/1.1 200 OK
 *   {
 *     "analyticsProcessorDefinitions" : [
 *       {
 *         "id": "5376c0aa-a93a-49e7-a5d9-16ff56d2e014",
 *         "name": "Average calculator",
 *         "description": "Represents processors that read values from their source, calculate the running average, and write it to their sink.",
 *         "processorType": "average",
 *         "version": "1.0.0"
 *       }
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
 *        -d '{ "processorType": "average" }' \
 *        -X POST http://localhost:8888/api/analytics-processor-definitions/discover
 */
router.route('/discover').post(validate(blueprint.discoverAnalyticsProcessorDefinitions),
  lift(method.discoverAnalyticsProcessorDefinitions), respond);

module.exports = router;
