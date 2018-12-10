var express = require('express');
var router = express.Router();
var registrationController = require('../controllers/RegistrationController');

/* GET home page. */
router.post('/adduser', function(req, res, next){
    let resController = new registrationController();
    resController.addUser(req, res);
    // let output = resController.test(req, res);
    // res.send(output);
});

router.get('/users',function(req, res, next){
    let regController = new registrationController();
    return regController.getAllUsers(req, res);
});

router.get('/getuser', function(req, res, next){
    let regController = new registrationController();
    let id = regController.findUser(req);

    if(id){
        res.statusMessage = "User found";
        res.set('id', [id]);
    }
    else{
        res.statusMessage= "No user found";
        res.statusCode = 404;
    }
    res.nd();
});


module.exports = router;
 