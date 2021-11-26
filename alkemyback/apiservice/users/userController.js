const userModel = require('./userModel')
const userDto = require('./userDto');




const bcrypt = require('bcrypt')



// module.exports = {
//     async get(req, res) {
//         const user = await userModel.getUser(req.params.id);
//         if (!user) return res.sendStatus(404);
//         return res.send("llega"
//             // userDto.single(user, req.user)
//                 );
//     }

// };


const login = async (req, res) => {
    const userCreate = req.body
    const users = await userModel.login(userCreate);
    const userRow = await userDto.login(users)
    res.status(200).json(userRow);
};


const register = async (req, res) => {
    const { id_user, fullname, password } = req.body
    const userCreate = req.body
    const user = await userModel.register(userCreate);
    const userRow = await userDto.register(user)
    res.status(200).json(userRow);
};


const gets = async (req, res) => {
    const user = await userModel.getUser();
    const userRow = await userDto.singles(user)
    res.status(200).json(userRow);
};

module.exports = {
    register,
    login,
    gets
}