const express = require('express');
const router = express.Router();


 const budgets = require('./budgetController');


 router.get('/:id', budgets.get);
// //  router.get('/sigin', user.sigin);
//  router.post('/register', user.register);
//  router.post('/login', user.login);




// /* GET bugdes listing. */
// router.get('/', function(req, res, next) {
//   res.send('no se inunda másssss');
// });



module.exports= router;
