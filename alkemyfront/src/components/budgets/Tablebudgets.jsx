import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'


import axios from 'axios';
import Createbudget from './Createbudget';
import Form from './utils/Form';




const Tablebudgets = () => {
    const { people, UserChange } = useContext(AuthContext)
    const [data, setData] = useState([])
    const [dataTable, setDataTable] = useState([])
    const [result, setResult] = useState([])
    const [edit, setEdit] = useState(true)
    const [editID, setEditID] = useState("")



    useEffect(() => {
        if (localStorage.getItem('userSession')) {
            const userSession = JSON.parse(localStorage.getItem('userSession'))
            setData(userSession)
        }
        getEveryThing()
    }, [])

    // console.log(data, "toma por miron")

    const logout = () => {
        UserChange({
            email: "",
            fullname: "",
            id_user: 0

        }
        )
        window.location.reload();
    }



    const getEveryThing = async () => {





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
        const element = n.data
        setDataTable(element)

    }


    const OrderBy = () => {
        const rEgress = dataTable.filter(item => item.type === "egress")
        const rEntry = dataTable.filter(item => item.type === "entry")
        const rEg = rEgress.slice(0, 5)
        const rEn = rEntry.slice(0, 5)




        setResult({
            ...rEg,
            ...rEn

        })


    }
    // console.log({...result})

    // console.log({...dataTable})

    const EditBudgets = (id_budget) => {
        setEditID(id_budget)
        setEdit(false)
    }



    return (
        <div>

            {
                edit ? (
                    <table class="table table-border cell-border subcompact striped">
                        <thead>
                            <tr>
                                <th>concept</th>
                                <th>amount</th>
                                <th>data</th>
                                <th>type</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                dataTable
                                    .slice(0, 10)
                                    .map((item, index) =>



                                        <tr key={index}>



                                            <td>{item.concept}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.date}</td>
                                            <td>{item.type}</td>


                                            <td>

                                                <button className="btn-primary btn-sm"
                                                    onClick={(() => EditBudgets(item.id_budget))}
                                                >Edit</button>


                                            </td>
                                        </tr>
                                    )
                            }



                        </tbody>
                    </table>
                ) :
                    (
                        <Form value={editID}/>
                    )
            }
            {/* <button type="submit" onClick={() => logout()} className="btn btn-primary center">LogOut</button> */}



            {/* <button type="submit" onClick={() => OrderBy()} className="btn btn-primary center">Order By Type</button> */}











        </div>
    )
}

export default Tablebudgets
