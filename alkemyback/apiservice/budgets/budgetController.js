const budgetModel = require('./budgetModel')
const budgetDto = require('./budgetDto')





const get = async (req, res) => {
    try {
        const id_user = parseInt(req.params.id);
        const budget = await budgetModel.getBudget(id_user);
        const budgetRow = await budgetDto.singles(budget)
        res.status(200).json(
            {
                data: budgetRow,
                status: 200
            }
        );
    } catch (error) {
        res.status(400).json(
            {
                data: 0,
                status: 400

            }
        );
    }

}

const save = async (req, res) => {
    try {
        const budgetSave = await budgetModel.saveBudget(req.body);
        const id_user = parseInt(req.body.id_user)
        const budget = await budgetModel.getBudget(id_user);
        const budgetRow = await budgetDto.singles(budget)
        res.status(200).json(
            {
                data: budgetRow,
                status: 200
            }
        );

    } catch (error) {
        res.status(400).json(
            {
                data: 0,
                status: 400
            }
        );
    }


}

const deletes = async (req, res) => {
    try {
        const id_budget = parseInt(req.params.id);
        const id_user = req.body.id_user
        const budgets = await budgetModel.deleteBudget(id_budget);
        const budget = await budgetModel.getBudget(id_user);
        const budgetRow = await budgetDto.singles(budget)
        res.status(200).json(
            {
                data: budgetRow,
                status: 200
            }
        );
    } catch (error) {
        res.status(400).json(
            {
                data: 0,
                status: 400
            }
        );
    }




}
const update = async (req, res) => {
    try {
        const id_budget = parseInt(req.params.id);
        const id_user = parseInt(req.body.id_user);
        const element = req.body;
        const everything = { ...element, id_budget }
        const budgets = await budgetModel.updateBudget(everything);
        const budget = await budgetModel.getBudget(id_user);
        const budgetRow = await budgetDto.singles(budget)
        res.status(200).json(
            {
                data: budgetRow,
                status: 200
            }
        );
    } catch (error) {
        res.status(400).json(
            {
                data: 0,
                status: 400
            }
        );
    }
}


module.exports = {
    get,
    save,
    deletes,
    update
}