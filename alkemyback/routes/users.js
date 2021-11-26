var express = require('express');
var router = express.Router();

const users = require('./../apiservice/users/userRoutes')


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.use('/users', users);


module.exports = router;
