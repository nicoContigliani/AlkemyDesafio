import React, { useContext, useEffect, useState } from 'react'
// import { AuthContext } from '../../contexts/AuthProvider'
import { useDispatch, useSelector } from 'react-redux';


import axios from 'axios';
import Createbudget from './Createbudget'
import Form from './Form';
import { set } from 'react-hook-form';




const Tablebudgets = (props) => {
    // const { people, UserChange } = useContext(AuthContext)
    const [data, setData] = useState([])
    const [dataTable, setDataTable] = useState([])
    const [dataTableOrderBy, setDataTableOrderBy] = useState([])
    const [dataTableOrigin, setDataTableOrigin] = useState([])



    const [result, setResult] = useState()
    const [edit, setEdit] = useState(true)
    const [editID, setEditID] = useState("")






    useEffect(() => {

        if (localStorage.getItem('userSession')) {
            const userSession = JSON.parse(localStorage.getItem('userSession'))
            setData(userSession)
        }
        setTimeout(() => {
            // console.log(props);
            // console.log("desde la tabla ", budgets.array.data);
            setDataTableOrigin(budgets.array.con);
            setDataTableOrderBy(budgets.array.dataBud)
            console.log(budgets.array.dataBud, "tabla")
            if (budgets.array.dataBud === undefined) {
                // console.log("sale indefinido");
            } else {
                // console.log("paso");
                setDataTable(budgets.array.con)
            }



        }, 1000);






    }, [])
    const dispatch = useDispatch()

    const budgets = useSelector(store => store.budgets)


    const EditBudgets = async (id_budget) => {
        const budgetsforID = await dataTable.filter(item => (id_budget === item.id_budget))
        const element = budgetsforID[0]
        const elements = { ...element, edit: true }

        setEditID(elements)
        setEdit(false)
        console.log(element);
    }

    const orderBy = () => {
        setDataTable(budgets.array.dataBud);
    }
    const changeDataOrigin = () => {
        // console.log(dataTableOrigin);
        setDataTable(budgets.array.con);

        // setDataTable(dataTableOrigin)

    }

    return (
        <div>
            <br />

            <div className='reduction'>
                <div class="btn-group">

                </div>
                {
                    edit ? (
                        <div className="container ">

                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">


                                <button className='btn btn-outline-info btn-sm mb-1' onClick={changeDataOrigin}>
                                    ALL
                                </button>
                                <button type="button" className="btn btn-outline-info btn-sm mb-1" onClick={orderBy}>
                                    TYPE
                                </button>
                            </div>

                            <table className="table table-border cell-border subcompact striped">
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


                                                    <td className="center">

                                                        <button className="btn-primary btn-sm"
                                                            onClick={(() => EditBudgets(item.id_budget))}
                                                        >Edit</button>


                                                    </td>
                                                </tr>
                                            )
                                    }



                                </tbody>
                            </table>
                        </div>
                    ) :
                        (
                            <Form value={editID} />
                        )
                }
                {/* <button type="submit" onClick={() => logout()} className="btn btn-primary center">LogOut</button> */}



                {/* <button type="submit" onClick={() => OrderBy()} className="btn btn-primary center">Order By Type</button> */}











            </div>
        </div>

    )
}

export default Tablebudgets
