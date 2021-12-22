const jwt = require('jsonwebtoken');


const single = (resource, authUser) => (
  {
    id_user: resource.id_user,
    fullname: resource.fullname,
    password: resource.password,
  });

const singles = async (resource) => {

  const rest = await resource.map((item) => {
    delete item.password
    return item
  }
  )

  return rest
}


const register = async (resource) => {
  console.log(resource)
  const data = resource[0]
  const rest = await data.map((item) => {
    delete item.password
    return item
  }
  )

  return rest
}


const login = async (resource) => {
  const data = resource[0]
  const rest = await data.map((item) => {
    delete item.password
    return item
  }
  )

  const token = jwt.sign({
    id_user: rest[0].id_user,
    fullname: rest[0].fullname,
    email: rest[0].email
  }, process.env.TOKEN_SECRET)



  return token
}

module.exports = {
  single,
  singles,
  register,
  login
};
