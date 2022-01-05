import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import Chart from 'chart.js/auto';
import { useDispatch, useSelector } from 'react-redux';
import { getUserActionn, showBoudgetsActionn } from '../../features/Redux/boudgetsDucks'
import coint from '../utils/cointt.svg'


import { motion } from "framer-motion";





const Resulting = (props) => {
    const [dataGet, setDataGet] = useState([])
    const [resultante, setResultante] = useState([])
    const [dataBudgets, setDatabudgets] = useState([])
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()

    const budgets = useSelector(store => store.budgets)
    const budgetsArray = budgets.array.con;
    console.log(budgetsArray);
    useEffect(() => {

        setTimeout(() => {

        }, 5000);

        setDatabudgets(budgetsArray, "")
        resultant()
        //     // getLog()
        //     if (budgets.array.data !== undefined) {

        //     } else {
        //         const dataB = budgets.array.data
        //         setDatabudgets(dataB)


        //     }
        //     setTimeout(() => {

        //     }, 10000);
    }, [])


    // console.log(data.id_user, "esto estan en main de presupuesto")



    const getLog = async () => {

        // console.log({ ...user });
        // const id_user = 3;
        // const n = await axios({
        //     url: `http://localhost:3001/api/budgets/${id_user}`,
        //     method: 'GET',
        //     contentType: 'application/json',


        //     success: function (response) {
        //         console.log(response);
        //         // localStorage.setItem('userSession', JSON.stringify(response))

        //     }
        // });
        // setDataGet(n.data)

    }
    // setTimeout(() => {
    //     resultant()

    // }, 6000);


    const resultant = async () => {

        if (budgetsArray !== undefined) {

            const resultantes = budgetsArray.filter(item => item.type === "egress")
            const rData = resultantes.map(item => parseInt(item.amount))
            let total = rData.reduce((a, b) => a + b, 0);


            const resultantt = budgetsArray.filter(item => item.type === "entry")
            const rrData = resultantt.map(item => parseInt(item.amount))
            let totall = rrData.reduce((a, b) => a + b, 0);

            const r = totall - total

            setResultante({
                total,
                totall,
                r
            })

            setShow(true)
        } else {
            setTimeout(() => {
                resultant()
            }, 1000);

        }





    }

    // console.log(dataBudgets);


    return (

        <div className="App">

            {
                show ? (

                    <div className="container">


                        <div className="result-center">
                            <img src={coint} className='coint' />

                            <div className="container">
                                <strong>
                                    Income: {resultante.totall} - Egreess:{resultante.total}
                                    <hr />
                                    Result:{resultante.r}
                                </strong>


                            </div>


                        </div>
                    </div>
                ) : ("")
            }
            <button onClick={resultant}></button>


        </div>
    )
}

export default Resulting
