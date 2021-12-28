const usersDao = require('./userDao');
const bcrypt = require('bcrypt')




const register = async (elemento) => {
  const users = []
  const userss = await usersDao.registerGet()
  const fullname = elemento.fullname;
  const email = elemento.email;
  const password = elemento.password;

  const resultados = userss.filter(u => u.email === email)
  if (resultados.length >= 1) {
    users.push(
      {
        "id_user": "0",
        "email": "User Exist"
      }
    )
  } else {
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = { email, fullname, hashedPassword }
    const saveRegister = await usersDao.RegisterPost(newUser)
    const data = { email, fullname }
    const u = await usersDao.getUserR(email)
    users.push(u)
  }

  return users

}

const login = async (elemento) => {

  const users = [];
  const datas = [];

  const user = await usersDao.LoginGet()
  const email = elemento.email;
  const password = elemento.password;
  const fullname = elemento.fullname;
  const resultados = user.filter(u => u.email === email)
  // const hassPassword = resultados[0].password;


  // // console.log(resultados.length)
  // if (await bcrypt.compare(password, resultados[0].password)) {
  //   console.log("son iguales")
  // } else {
  //   console.log("no son iguales", password, " viene de pasword", resultados[0].password, "password de array")
  // }

  if (resultados.length >= 1 && await bcrypt.compare(password, resultados[0].password)) {

    users.push(resultados)
  } else {

    users.push([[
      {
        "id_user": 0,
        "email": "not user"
      }
    ]])
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