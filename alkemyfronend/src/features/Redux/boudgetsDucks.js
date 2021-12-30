import axios from 'axios';

//constantes

const dataInitial = {
    array: [],
    password: "",
    email: "",
    fullname: "",
    id_roles: "",
    id_user: "",
    token: ""
}


//types
const USER_GET_SUCCESS = "USER_GET_SUCCESS";
const USER_GET_ERROR = "USER_GET_ERROR";
const BOUDGETS_CREATE_SUCCESS = "BOUDGETS_CREATE_SUCCESS";
const BOUDGETS_CREATE_ERROR = "BOUDGETS_CREATE_ERROR";
const BOUDGETS_UPDATE_SUCCESS = "BOUDGETS_UPDATE_SUCCESS";
const BOUDGETS_UPDATE_ERROR = "BOUDGETS_UPDATE_ERROR";
const BOUDGETS_DELETE_SUCCESS = "BOUDGETS_DELETE_SUCCESS";
const BOUDGETS_DELETE_ERRROR = "BOUDGETS_DELETE_ERROR";
const BOUDGETS_SHOW_SUCCESS = "BOUDGETS_SHOW_SUCCESS";
const BOUDGETS_SHOW_ERROR = "BOUDGETS_SHOW_ERROR";
const ORDER_BY_BOUDGETS_SHOW_SUCCESS = "ORDER_BY_BOUDGETS_SHOW_SUCCESS"

//Reducer
export default function boudgetsReducer(state = dataInitial, action) {
    switch (action.type) {

        case USER_GET_SUCCESS:
            return { ...state, array: action.payload };
        case USER_GET_ERROR:
            return { ...state }
        case ORDER_BY_BOUDGETS_SHOW_SUCCESS:
            return { ...state, array: action.payload }

        case BOUDGETS_SHOW_SUCCESS:
            return { ...state, array: action.payload };
        case BOUDGETS_SHOW_ERROR:
            return { ...state }

        case BOUDGETS_UPDATE_SUCCESS:
            return { ...state, array: action.payload };
        case BOUDGETS_UPDATE_ERROR:
            return { ...state }

        case BOUDGETS_CREATE_SUCCESS:
            return { ...state, array: action.payload };
        case BOUDGETS_CREATE_ERROR:
            return { ...state }

        case BOUDGETS_DELETE_SUCCESS:
            return { ...state, array: action.payload };
        case BOUDGETS_DELETE_ERRROR:
            return { ...state }



        default:
            return state;
    }
}

//Action

export const getUserActionn = (valor) => async (dispatch, getState) => {

    if (localStorage.getItem('userSession')) {
        const userSession = JSON.parse(localStorage.getItem('userSession'))

        try {
            dispatch({
                type: USER_GET_SUCCESS,
                // payload: res.data[0]
                payload: userSession
            })
        } catch (error) {

        }
    }


}
export const showBoudgetsActionn = (valor) => async (dispatch, getState) => {

    if (localStorage.getItem('userSession')) {
        const userSession = JSON.parse(localStorage.getItem('userSession')

        )

        const id_user = userSession.id_user;
        const token = userSession.token;
        const url = `http://localhost:3001/api/budgets/${id_user}`

        console.log(id_user, token)
        const dataBoudgets = await axios({
            url: `http://localhost:3001/api/budgets/${id_user}?token=${token}`,
            method: 'GET',
            contentType: 'application/json',

            success: function (response) {
                // console.log(response);

            }
        },
        );
        // const dataBud = dataBoudgets.data;

        const con = dataBoudgets.data.data

        if (dataBoudgets.data !== undefined) {
            console.log("pasa")
            console.log(con)
        }


        const rEgress = con.filter(item => item.type === "egress")
        const rEntry = con.filter(item => item.type === "entry")
        const rEg = rEgress.slice(0, 5)
        const rEn = rEntry.slice(0, 5)
        const dataBud = [...rEn, ...rEg]
        console.log(dataBud)
        const budgets = { con, dataBud }

        try {
            dispatch({
                type: BOUDGETS_SHOW_SUCCESS,
                // payload: res.data[0]
                payload: budgets
            })
        } catch (error) {

        }
    } else {
        console.log("you arent login")
    }


}


export const orderByBoudgetsAction = (valor) => async (dispatch, getState) => {

    if (localStorage.getItem('userSession')) {
        const userSession = JSON.parse(localStorage.getItem('userSession')

        )

        const id_user = userSession.id_user;
        const token = userSession.token;
        const url = `http://localhost:3001/api/budgets/${id_user}`

        console.log(id_user, token)
        const dataBoudgets = await axios({
            url: `http://localhost:3001/api/budgets/${id_user}?token=${token}`,
            method: 'GET',
            contentType: 'application/json',

            success: function (response) {
                // console.log(response);

            }
        },
        );
        const dataBud = dataBoudgets.data;
        try {
            dispatch({
                type: BOUDGETS_CREATE_SUCCESS,
                // payload: res.data[0]
                payload: dataBud
            })
        } catch (error) {

        }
    } else {
        console.log("you arent login")
    }


}

export const createBoudgetsActionn = (valor) => async (dispatch, getState) => {



    const amount = valor.amount;
    const concept = valor.concept;
    const dateElement = valor.date;

    var event = new Date(dateElement);
    let date = JSON.stringify(event)
    date = date.slice(1, 11)
    console.log(date)


    // array: []
    // concept: "service"
    // date: Sat Jan 01 2022 00: 00: 00 GMT - 0300(hora estándar de Argentina) { }
    // type: "algo"
    // const amount = valor.data.amount;




    console.log(new Date(valor.date).toUTCString(), "esto viene de valor")
    if (localStorage.getItem('userSession')) {
        const userSession = JSON.parse(localStorage.getItem('userSession')

        )

        const id_user = userSession.id_user;
        const token = userSession.token;
        const url = `http://localhost:3001/api/budgets/${id_user}`

        console.log(id_user, token)
        // const dataBoudgets = await axios({
        //     url: `http://localhost:3001/api/budgets/${id_user}?token=${token}`,
        //     method: 'GET',
        //     contentType: 'application/json',

        //     success: function (response) {
        //         // console.log(response);

        //     }
        // },
        // );
        // const dataBud = dataBoudgets.data;
        const dataBud = await axios({
            url: `http://localhost:3001/api/budgets/${id_user}?token=${token}`,
            method: 'POST',
            contentType: 'application/json',
            // data: JSON.stringify({ ...user}),
            // data: { password, email },
            success: function (response) {
                console.log(response, "post en authducks");
                // localStorage.setItem('userSession', JSON.stringify(response))

            }
        });





        try {
            dispatch({
                type: ORDER_BY_BOUDGETS_SHOW_SUCCESS,
                // payload: res.data[0]
                payload: dataBud
            })
        } catch (error) {

        }
    } else {
        console.log("you arent login")
    }


}