import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Chart from 'chart.js/auto';









const Resulting = () => {
    const [dataGet, setDataGet] = useState([])

    const [resultante, setResultante] = useState([])


    useEffect(() => {
        getLog()
    }, [])


    // console.log(data.id_user, "esto estan en main de presupuesto")



    const getLog = async () => {

        // console.log({ ...user });
        const id_user = 3;
        const n = await axios({
            url: `http://localhost:3001/api/budgets/${id_user}`,
            method: 'GET',
            contentType: 'application/json',


            success: function (response) {
                console.log(response);
                // localStorage.setItem('userSession', JSON.stringify(response))

            }
        });
        setDataGet(n.data)

    }
    setTimeout(() => {
        resultant()

    }, 6000);


    const resultant = async () => {
        const resultantes = dataGet.filter(item => item.type === "egress")
        const rData = resultantes.map(item => parseInt(item.amount))

        let total = rData.reduce((a, b) => a + b, 0);

        // if (total === 0) {
        //     // console.log("");
        // } else {
        //     console.log(total);
        // }
        const resultantt = dataGet.filter(item => item.type === "entry")
        const rrData = resultantt.map(item => parseInt(item.amount))
        let totall = rrData.reduce((a, b) => a + b, 0);


        const r = totall - total


        // const x = rData.reduce(myFunc);

        // function myFunc(total, num) {
        //     return total + num;
        // }

        // const resul = dataGet.filter(item => item.type === "income")
        // // console.log(resul, "income")
        // const riData = resul.map(item => parseInt(item.amount))
        // const xi = riData.reduce(myFuncc);

        // function myFuncc(t, n) {
        //     return t + n;
        // }


        // setResultante({
        //     ...resultante,
        //     x, xi, res
        // })
        setResultante({
            total,
            totall,
            r
        })
    }





    return (

        <div className="App">


            
            <br />
            egreess:{resultante.total}

            <hr />
            income: {resultante.totall}
            <hr />
            Resultante:{resultante.r}

        </div>
    )
}

export default Resulting
