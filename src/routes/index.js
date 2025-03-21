// Make sure express middelware is initialized.
var express = require('express');
var router = express.Router(); // Organize the express app's routing logic.

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Makes sure all router routes have the same properties.
module.exports = router;
