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
const getUser = async (req, res) => {
    const response = await pool.query('SELECT * FROM public.users;');
    const users = response.rows;
    return users
};

const registerGet = async (req, res) => {
    const response = await pool.query('SELECT * FROM public.users ORDER BY id_user ASC');
    user = response.rows
    return user
}
const RegisterPost = async (newUsers) => {
    const password = newUsers.hashedPassword;
    const fullname = newUsers.fullname;
    try {
        const response = await pool.query('INSERT INTO public.users (fullname, password) VALUES ($1, $2)', [fullname, password]);
        return user
    } catch (error) {
        console.log(error)

    }
    return user
}






module.exports = {
    RegisterPost,
    registerGet,
    getUser
}