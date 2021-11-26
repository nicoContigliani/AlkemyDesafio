const usersDao = require('./userDao');
const bcrypt = require('bcrypt')


// module.exports = {

// //   async getUsers(page, limit) {
// //     return userDao.getUsers(page, limit);
// //   },

// async getUsers() {
//   return usersDao.getUser();
// },  
// async getUser(id) {
//     return usersDao.getUser(id);
//   },

//   async createUser(user) {
//     return usersDao.createUser(user);
//   },

//   async updateUser(id, { email, username }) {
//     return usersDao.updateUser(id, { email, username });
//   },

//   async deleteUser(id) {
//     return usersDao.updateUser(id);
//   },
// };



// async getUsers() {
//   return usersDao.getUser();
// }, 

const register = async (elemento) => {
  const users = []
  const userss = await usersDao.registerGet()
  const fullname = elemento.fullname;
  const password = elemento.password;

  const resultados = userss.filter(u => u.fullname === fullname)
  if (resultados.length >= 1) {

  } else {
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = { fullname, hashedPassword }
    const saveRegister = await usersDao.RegisterPost(newUser)
    const u = await usersDao.getUser()
    users.push(u)
  }

  return users
}

const login = async (elemento) => {
  const users = [];
  const datas = [];
  const user = await usersDao.registerGet()
  const fullname = elemento.fullname;
  const password = elemento.password;

  const resultados = user.filter(u => u.fullname === fullname)

  if (resultados.length >= 1 && await bcrypt.compare(password, resultados[0].password)) {
    // console.log("hay elemento")
    // const validPassword = await bcrypt.compare(password, resultados[0].password);
    users.push(resultados)
  } else {
    users.push("error contraseña o usuario")
  }
  return users
}


const getUser = async (req, res) => {
  const users = await usersDao.getUser()
  return users
}
module.exports = {
  login,
  register,
  getUser
}