const router = require('express').Router();
const apiRoutes = require('./api')

// This defines all of the routes in the api handler with the route handler '/api'
router.use('/api', apiRoutes);

module.exports = router;