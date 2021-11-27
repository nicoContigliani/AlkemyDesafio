const budgetModel = require('./budgetModel')



const get = async(req, res) => {


    const id_user = parseInt(req.params.id);
     const budget = await budgetModel.getBudget(id_user);

    // console.log(req.params.id)
}






module.exports = {

    get
}