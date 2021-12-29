import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { getUserActionn, showBoudgetsActionn } from '../../features/Redux/boudgetsDucks'
import Tablebudgets from './Tablebudgets';


const Boudgets = (props) => {
    const [data, setData] = useState({
        email: "@",
        fullname: "n",

    })
    const [dataBudgest, setDataBudgest] = useState([
        {
            id_budget: "",
            concept: "",
            amount: "",
            date: "",
            id_user: "",
            type: ""
        }
    ])
    useEffect(() => {
        dispatch(x)
        setTimeout(() => {

            dispatch(c)
        }, 5000);
    }, [])

    const dispatch = useDispatch()

    const budgets = useSelector(store => store.budgets)



    const dataInitial = {
        array: [],
        password: "",
        email: "",
        fullname: "",
        id_roles: "",
        id_user: "",
        token: ""


    }

    const x = getUserActionn(
        dataInitial
    )
    const c = showBoudgetsActionn(
        dataInitial
    )

    setTimeout(() => {

        const data = budgets.array.data;
        // console.log(dataUser, "lo logre")
        setDataBudgest(data)

    }, 3000);

    console.log(dataBudgest)


    return (
        <div>


            <button onClick={() => { dispatch(c); }}>
                send
            </button>
            <br />
            {/* Welcome {data.fullname} */}

            {budgets.array.data !== undefined ? (
                <Tablebudgets value={dataBudgest} />

            ) : ("no")}
        </div>
    )
}

export default Boudgets
