const express = require('express');

const analyticsProcessorDefinitions = require('./analytics-processor-definitions');
const dataInterfaces = require('./data-interfaces');
const dataKinds = require('./data-kinds');
const dataSourceDefinitions = require('./data-source-definitions');
const healthCheck = require('./health-check');

const router = express.Router();

router.use('/analytics-processor-definitions', analyticsProcessorDefinitions);
router.use('/data-interfaces', dataInterfaces);
router.use('/data-kinds', dataKinds);
router.use('/data-source-definitions', dataSourceDefinitions);
router.use('/health-check', healthCheck);

module.exports = router;
