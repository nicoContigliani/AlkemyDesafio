const budgetModel = require('./budgetModel')
const budgetDto = require('./budgetDto')





const get = async (req, res) => {


    const id_user = parseInt(req.params.id);
    const budget = await budgetModel.getBudget(id_user);
    const budgetRow = await budgetDto.singles(budget)
    res.status(200).json(budgetRow);

}


const save = async (req, res) => {

    const budgetSave = await budgetModel.saveBudget(req.body);
    const id_user = parseInt(req.body.id_user)
    const budget = await budgetModel.getBudget(id_user);
    const budgetRow = await budgetDto.singles(budget)
    res.status(200).json(budgetRow);

}





const deletes = async (req, res) => {
    const id_budget = parseInt(req.params.id);
    const id_user = req.body.id_user
    const budgets = await budgetModel.deleteBudget(id_budget);
    const budget = await budgetModel.getBudget(id_user);
     const budgetRow = await budgetDto.singles(budget)
     res.status(200).json(budgetRow);
}


module.exports = {

    get,
    save,
    deletes
}