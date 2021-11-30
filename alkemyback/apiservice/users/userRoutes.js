const express = require('express');
const router = express.Router();


 const user = require('./userController');


 router.get('/', user.gets);
//  router.get('/sigin', user.sigin);
 router.post('/register', user.register);
 router.post('/login', user.login);

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('rutausuario');
// });



module.exports= router;
