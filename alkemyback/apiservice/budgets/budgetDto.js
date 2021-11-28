const single = (resource, authUser) => (
  {
    id_user: resource.id_user,
    fullname: resource.fullname,
    password: resource.password,
  });

const singles = async (resource) => {

  const rest = await resource.map((item) => {

    return item
  }
  )

  return rest
}


const register = async (resource) => {

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

  return rest
}



module.exports = {
  single,
  singles,
  register,
  login
};
