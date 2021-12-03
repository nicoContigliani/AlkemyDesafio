var express = require('express');
var router = express.Router();

const users = require('../apiservice/users/userRoutes')
const budgets = require('../apiservice/budgets/budgetRoutes')

/* GET users listing. */
// router.get('/budgets/ten', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.use('/users', users);
router.use('/budgets', budgets);


module.exports = router;
