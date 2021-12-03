const budgetDao = require('./budgetDao');
const bcrypt = require('bcrypt')



const getBudget = async (id_user) => {
  const budget = await budgetDao.getBudget(id_user)
  return budget
}



const saveBudget = async (resource) => {
  const budget = await budgetDao.saveBudget(resource)
  return budget
}
const deleteBudget = async(id_budget)=>{
  const budget = await budgetDao.deleteBudget(id_budget)
  return budget
}
const updateBudget = async(everything)=>{
  const budget = await budgetDao.updateBudget(everything)
  return budget
}



module.exports = {
  getBudget,
  saveBudget,
  deleteBudget,
  updateBudget
}