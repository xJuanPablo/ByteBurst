const router = require('express').Router();
const bookRoutes = require('./userRoutes')

//This makes all of the files in ./bookRoutes have a route handler of /books
router.use('/users', bookRoutes);

module.exports = router;