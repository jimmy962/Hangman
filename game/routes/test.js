var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/tasks', function(req, res, next) {
  //res.send('Testing setup');
  res.render('index.html');
});

router.get('/starter', function(req, res, next){
  var initial={current: "_ _ _ _ _ _ _ _", state: 0, leng: 8, wins: 0, losses: 0, progress: 2 };
  res.json(initial);
})

module.exports = router;