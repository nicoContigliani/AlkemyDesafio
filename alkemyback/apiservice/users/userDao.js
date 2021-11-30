const pool = require('../../services/database');
const bcrypt = require('bcrypt')



const getUser = async () => {
    
    const response = await pool.query('SELECT * FROM public.users;');
    const users = response.rows;
    return users
};
const getUserR = async (data) => {

   const {email,fullname}=data;
    const response = await pool.query("SELECT * FROM public.users where email ='" + email+"'");
    const users = response.rows;

     return users
};

const registerGet = async (data) => {
    const response = await pool.query('SELECT * FROM public.users;');
    user = response.rows
    return user
}
const RegisterPost = async (newUsers) => {
    const password = newUsers.hashedPassword;
    const fullname = newUsers.fullname;
    const email = newUsers.email;
    try {
        const response = await pool.query('INSERT INTO public.users (fullname, password,email) VALUES ($1, $2,$3)', [fullname, password,email]);
        return user
    } catch (error) {
        console.log(error)

    }
    return user
}


module.exports = {
    RegisterPost,
    registerGet,
    getUserR,
    getUser
}