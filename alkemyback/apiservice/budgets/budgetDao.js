const pool = require('../../services/database');
const bcrypt = require('bcrypt')



// const getUser = async (req, res) => {
//     // const response = await pool.query('SELECT id_user, fullname FROM public.users;');
//     // try {

//     //     console.log("paso por dao")
//     //     // console.log(response.rows)
//     // } catch (error) {
//     //     console.log(error)

//     // }

//     // res.status(200).json(response.rows);
//     // res.json(response.rows)
//     // res.send("algo")
//     // console.log(response.rows)
//     res.send("hola")

// }


////

// const getBudgets = async () => {
//     // console.log(id_user)
//     try {
//         const response = await pool.query('SELECT *  FROM public.budgets ');
//         user = response.rows
//         return user
//     } catch (error) {
//         console.log(error)

//     }
// }


const getBudget = async (id_user) => {
    // console.log(id_user)
    try {
        const response = await pool.query('SELECT *  FROM public.budgets WHERE id_user =' + id_user);
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




module.exports = {
    // getBudgets,
    getBudget,
    saveBudget,
    deleteBudget
}