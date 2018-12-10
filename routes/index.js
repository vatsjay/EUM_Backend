var express = require('express');
var router = express.Router();
//var registrationController = require('./controllerts/RegistrationControllers');

/* GET home page. */
router.post('/users', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/getName',)

module.exports = router;
 