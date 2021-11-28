const express = require('express');
const router = express.Router();


const budgets = require('./budgetController');


router.get('/:id', budgets.get);
router.post('/', budgets.save);
router.delete('/:id', budgets.deletes);






// /* GET bugdes listing. */
// router.get('/', function(req, res, next) {
//   res.send('no se inunda másssss');
// });



module.exports = router;
