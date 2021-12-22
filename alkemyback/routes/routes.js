var express = require('express');
var router = express.Router();

const auths = require("../middlewares/auth");


const users = require('../apiservice/users/userRoutes')
const budgets = require('../apiservice/budgets/budgetRoutes')
const auth = require('../apiservice/auths/authRoutes')

/* GET users listing. */
// router.get('/budgets/ten', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.use('/auth', auth);

router.use('/users', users);
router.use('/budgets', auths, budgets);

router.post("/welcome", auths, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
});

/* GET users listing. */
// router.get('/auth', function (req, res, next) {
//     res.send('rutausuario');
// });

module.exports = router;
