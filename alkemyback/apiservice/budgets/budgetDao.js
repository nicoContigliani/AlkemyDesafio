const pool = require('../../services/database');
const bcrypt = require('bcrypt')





const getBudget = async (id_user) => {
    // console.log(id_user)
    try {
        const response = await pool.query('SELECT *  FROM public.budgets WHERE id_user =' + id_user+' ORDER BY id_budget desc');
        user = response.rows
        return user
    } catch (error) {
        console.log(error)

    }
}






const saveBudget = async (resource) => {
    const { concept, amount, date, id_user, type } = resource;
    try {
        const response = await pool.query('INSERT INTO public.budgets (concept, amount, "date", id_user, "type") VALUES ($1,$2,$3,$4,$5)', [concept, amount, date, id_user, type]);
        budgets = response
        return budgets
    } catch (error) {
        console.log(error)

    }
}




const deleteBudget = async (id_budget) => {
    try {
        const response = await pool.query('DELETE FROM public.budgets WHERE id_budget = $1', [
            id_budget
        ]);
        budgets = response.rows
        return budgets
    } catch (error) {
        console.log(error)

    }
}

const updateBudget = async (everything) => {
    console.log(everything)
    try {

        const { concept, amount, date, id_user, type, id_budget } = everything;
        const response = await pool.query('UPDATE public.budgets SET concept = $1, amount = $2,"date" =$3, id_user=$4 , "type"=$5 where id_budget = $6', [
            concept, amount, date, id_user, type, id_budget
        ]);


        budgets = response.rows
        return budgets
    } catch (error) {
        console.log(error)

    }
}


module.exports = {
    // getBudgets,
    getBudget,
    saveBudget,
    deleteBudget,
    updateBudget,

}