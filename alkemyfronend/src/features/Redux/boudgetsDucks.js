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

//Reducer
export default function boudgetsReducer(state = dataInitial, action) {
    switch (action.type) {

        case USER_GET_SUCCESS:
            return { ...state, array: action.payload };
        case USER_GET_ERROR:
            return { ...state }

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
        const dataBud = dataBoudgets.data;
        try {
            dispatch({
                type: BOUDGETS_SHOW_SUCCESS,
                // payload: res.data[0]
                payload: dataBud
            })
        } catch (error) {

        }
    } else {
        console.log("you arent login")
    }


}