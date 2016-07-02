var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect(req.query.url);
});

router.get('/resolutions', function(req, res, next) {
  res.render('resolutions', { title: 'Resolutions test' });
});

module.exports = router;
