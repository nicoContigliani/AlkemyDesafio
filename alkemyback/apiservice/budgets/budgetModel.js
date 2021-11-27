const budgetDao = require('./budgetDao');
const bcrypt = require('bcrypt')



const getBudget = async (id_user) => {
   const budget = await budgetDao.getBudget(id_user)
  // return budget
}
module.exports = {
  getBudget
}