var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/tasks', function(req, res, next) {
  //res.send('Testing setup');
  res.render('index.html');
});

module.exports = router;