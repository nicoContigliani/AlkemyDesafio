import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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


    const logout = () => {
        UserChange({
            email: "",
            fullname: "",
            id_user: 0

        }
        )
        window.location.reload();
    }


    return (
        <div>


            <button type="submit" onClick={() => logout()} className="btn btn-primary">salir</button>

            <table class="table table-border cell-border subcompact striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Username</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Bill</td>
                        <td>Gates</td>
                        <td>@billy</td>
                        <td>@billy</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Steve</td>
                        <td>Jobs</td>
                        <td>@stevy</td>
                        <td>@billy</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>Page</td>
                        <td>@larry</td>
                        <td>@billy</td>

                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Tablebudgets
