const single = (resource, authUser) => (
  {
    id_user: resource.id_user,
    fullname: resource.fullname,
    password: resource.password,
  });

const singles = async (resource) => {
  // const resp = respuesta.map(item=>{item.authUser,item.fullname})
  // const data = {
  //   id_user: resource.id_user,
  //   fullname: resource.fullname,
  // }
  const rest = await resource.map((item) => {
    delete item.password
    return item
  }
  )

  return rest
}


const register = async (resource) => {
  // const resp = respuesta.map(item=>{item.authUser,item.fullname})
  // const data = {
  //   id_user: resource.id_user,
  //   fullname: resource.fullname,
  // }
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

// const getUser = async (req, res) => {

//   return users
//  };




//  module.exports = {
//      getUser
//  }




const multiple = (resources, authUser) => resources.map((resource) => single(resource, authUser));

module.exports = {
  single,
  multiple,
  singles,
  register,
  login
};
