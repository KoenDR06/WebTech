// Make sure express middelware is initialized.
var express = require('express');
var router = express.Router(); // Organize the express app's routing logic.

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Makes sure all router routes have the same properties.
module.exports = router;
