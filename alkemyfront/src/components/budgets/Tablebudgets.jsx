import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];




const Tablebudgets = () => {
    const { people, UserChange } = useContext(AuthContext)
    const [data, setData] = useState([])
    const [dataTable, setDataTable] = useState([])



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
        // console.log(n.data[0])
        const element = n.data
        setDataTable(element)

    }


    // console.log(dataTable, "table");



    // amount: "285"
    // concept: "meet eag"
    // date: "2021-11-27T03:00:00.000Z"
    // id_budget: 7
    // id_user: "3"
    // type: "egress"





    return (
        <div>


            <button type="submit" onClick={() => logout()} className="btn btn-primary">salir</button>

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

                            .map((item, index) =>



                                <tr key={index}>

                                    {/* <th scope="row"
                                        onClick={(() => filtrarr(item.id_policys))}
                                    >{item.id_policys}

                                        <SearchIcon type="button" onClick={handleClickOpen} />
                                    </th> */}

                                    <td>{item.concept}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.date}</td>
                                    <td>{item.type}</td>
                                  

                                    <td>
                                    
                                                <button className="btn-primary btn-sm" 
                                                // onClick={(() => paraEditar(item.id_policys))}
                                                >Editar</button>
                                      

                                    </td>
                                </tr>
                            )
                    }



                </tbody>
            </table>









        </div>
    )
}

export default Tablebudgets
