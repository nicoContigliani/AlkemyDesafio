import axios from 'axios';


//contantes 
const dataInitial = {
    array: [],
    password: "123465789",
    email: "nico.contigliani@gmail.com",
}

//types


const LOG_USER_SUCCES = 'LOG_USER_SUCCES'
const LOG_USER_ERROR = 'LOG_USER_ERROR'
const REGISTER_USER_SUCCES = 'REGISTER_USER_SUCCES'
const CERRAR_SESION = 'CERRAR_SESION'

const REG_USER_SUCCES = 'REG_USER_SUCCES'
const REG_USER_ERROR = 'REG_USER_ERROR'




//reducer
export default function userReducer(state = dataInitial, action) {
    switch (action.type) {
        case LOG_USER_SUCCES:
            return { ...state, array: action.payload };
        case LOG_USER_ERROR:
            return { ...state }
        case CERRAR_SESION:
            return { ...state }

        case REG_USER_SUCCES:
            return { ...state, array: action.payload };
        case REG_USER_ERROR:
            return { ...state }
        default:
            return state;
    }
}




//acciones
export const getUserAction = (valor) => async (dispatch, getState) => {
    // console.log('getState', getState().pokemones.offset)
    // console.log(getState().user)
    console.log(valor, "esto viene por dentro de la funcion")
    const password = valor.password;
    const email = valor.email
    const x = getState().user
    // const password= "123465789"
    // const email= "nico.contigliani@gmail.com"
    // const password = await getState().user.password
    // const email = await getState().user.email
    // const password= x.password;
    // const email = x.email
    // const res = await axios.post(`http://localhost:3001/api/auth/login`, { password, email })


    // console.log(JSON.parse(localStorage.getItem('userSession')), "esto flota")
    try {
        const res = await axios({
            url: 'http://localhost:3001/api/auth/login',
            method: 'POST',
            contentType: 'application/json',
            // data: JSON.stringify({ ...user}),
            data: { password, email },
            success: function (response) {
                console.log(response, "post en authducks");
                // localStorage.setItem('userSession', JSON.stringify(response))

            }
        });
        //         const password = "123465789";
        // const email = "nico.contigliani@gmail.com";
        dispatch({
            type: LOG_USER_SUCCES,
            // payload: res.data[0]
            payload: res.data.data.token
        })

        console.log(res.data.data.token.rest[0])

        localStorage.setItem('userSession', JSON.stringify({
            token: res.data.data.token.token,
            id_user: res.data.data.token.rest[0].id_user,
            email: res.data.data.token.rest[0].email,
            fullname: res.data.data.token.rest[0].fullname,
            id_roles: res.data.data.token.rest[0].id_rol
        }))



    } catch (error) {
        const res = await axios({
            url: 'http://localhost:3001/api/auth/login',
            method: 'POST',
            contentType: 'application/json',
            // data: JSON.stringify({ ...user}),
            data: { password, email },
            success: function (response) {
                console.log(response, "post en authducks");
                // localStorage.setItem('userSession', JSON.stringify(response))

            }
        });
        // console.log(error)
        dispatch({
            type: LOG_USER_ERROR,
            // payload: res.data[0]
            payload: res.data.data
        })
        console.log(res.data.data[0][0], "en error")

    }
}



////****************************************************************//////



////****************************************************************//////

export const getUserActions = (valor) => async (dispatch, getStates) => {
    // console.log('getState', getState().pokemones.offset)
    // console.log(getState().user)
    console.log(valor, "esto viene por dentro de la funcion")
    const fullname = valor.fullname;
    const password = valor.password;
    const email = valor.email;

    // const x = getStates().user
    // const password= "123465789"
    // const email= "nico.contigliani@gmail.com"
    // const password = await getState().user.password
    // const email = await getState().user.email
    // const password= x.password;
    // const email = x.email
    // const res = await axios.post(`http://localhost:3001/api/auth/login`, { password, email })


    // console.log(JSON.parse(localStorage.getItem('userSession')), "esto flota")

    try {
        const res = await axios({
            url: 'http://localhost:3001/api/auth/register',
            method: 'POST',
            contentType: 'application/json',
            // data: JSON.stringify({ ...user}),
            data: { fullname, password, email },
            success: function (res) {
                console.log(res, "post en authducks");
                // localStorage.setItem('userSession', JSON.stringify(response))

            }
        });
        // console.log(res.data.rest[0][0], "salida del axios posth try/true")
        // console.log(res.data.error, "salida del axios posth try/true para error   ")
        // console.log(res.data.token, "salida del axios posth try/true para token")



        localStorage.setItem('userSession', JSON.stringify({
            token: res.data.token,
            id_user: res.data.rest[0][0].id_user,
            email: res.data.rest[0][0].email,
            fullname: res.data.rest[0][0].fullname,
            id_roles: res.data.rest[0][0].id_rol,
            error: res.data.error
        }))
        console.log(res.data)

        dispatch({
            type: REG_USER_SUCCES,
            // payload: res.data[0]
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }



    // try {
    //     const res = await axios({
    //         url: 'http://localhost:3001/api/auth/register',
    //         method: 'POST',
    //         contentType: 'application/json',
    //         // data: JSON.stringify({ ...user}),
    //         data: { fullname, password, email },
    //         success: function (res) {
    //             console.log(res, "post en authducks");
    //             // localStorage.setItem('userSession', JSON.stringify(response))

    //         }
    //     });
    //     //         const password = "123465789";
    //     // const email = "nico.contigliani@gmail.com";
    // dispatch({
    //     type: REG_USER_SUCCES,
    //     // payload: res.data[0]
    //     payload: res.data.data.token
    // })

    //     console.log(res.data.data)

    //     // localStorage.setItem('userSession', JSON.stringify({
    //     //     token: res.data.data.token.token,
    //     //     id_user: res.data.data.token.rest[0].id_user,
    //     //     email: res.data.data.token.rest[0].email,
    //     //     fullname: res.data.data.token.rest[0].fullname,
    //     //     id_roles: res.data.data.token.rest[0].id_rol
    //     // }))



    // } catch (error) {
    //     const res = await axios({
    //         url: 'http://localhost:3001/api/auth/register',
    //         method: 'POST',
    //         contentType: 'application/json',
    //         // data: JSON.stringify({ ...user}),
    //         data: { fullname, password, email },
    //         success: function (response) {
    //             console.log(response, "post en authducks");
    //             // localStorage.setItem('userSession', JSON.stringify(response))

    //         }
    //     });
    //     // console.log(error)
    //     dispatch({
    //         type: REG_USER_ERROR,
    //         // payload: res.data[0]
    //         payload: res.data.data
    //     })
    //     console.log(res.data, "en error")
    //     console.log("token: ", res.data.data.token, " ")


    //     // localStorage.setItem('userSession', JSON.stringify({
    //     //     token: res.data.data.token.token,
    //     //     id_user: res.data.data.token.rest[0].id_user,
    //     //     email: res.data.data.token.rest[0].email,
    //     //     fullname: res.data.data.token.rest[0].fullname,
    //     //     id_roles: res.data.data.token.rest[0].id_rol
    //     // }))

    // }
}
