import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";


import { useDispatch, useSelector } from 'react-redux';
import { getUserActionn, showBoudgetsActionn } from '../../features/Redux/boudgetsDucks'
import Tablebudgets from './Tablebudgets';
import { css } from "@emotion/react";
import Resulting from './Resulting';


const override = css`
  display: flex;
  margin: 0 auto;
  border-color: blue;
`;


const Boudgets = (props) => {
    let [color, setColor] = useState("#ffffff");

    const [data, setData] = useState({
        email: "@",
        fullname: "n",

    })
    const [log, setLog] = useState(false)
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
        }, 3000);
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

        if (budgets.array !== undefined) {

            setDataBudgest(data)
            setLog(true)
        }


        // console.log(budgets.array, "boudgets set time out");

    }, 5000);

    // console.log(dataBudgest)


    return (
        <div >


            {/* <button onClick={() => { dispatch(c); }}>
                send
            </button> */}
            <br />
            {/* Welcome {data.fullname} */}

            {
                // budgets.array !== undefined
                log ? (
                    <div>
                        <Resulting value={dataBudgest} />
                        <Tablebudgets value={dataBudgest} />
                    </div>

                ) : (
                    <ClipLoader color={color} css={override} size={150} />

                )}
        </div>
    )
}

export default Boudgets
