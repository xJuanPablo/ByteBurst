const router = require('express').Router();
const bookRoutes = require('./bookRoutes')

//This makes all of the files in ./bookRoutes have a route handler of /books
router.use('/books', bookRoutes);

module.exports = router;