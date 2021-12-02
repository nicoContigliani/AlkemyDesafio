import React, { useState, useEffect } from 'react'
import Login from '../logs/Login'
import Register from '../registers/Register'
import Tablebudgest from '../budgets/Tablebudgets'
import AuthProvider from '../../contexts/AuthProvider'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}





const Main = (prop) => {
    const [value, setValue] = React.useState(0);
    const [log, setLog] = useState(false)

    useEffect(() => {
        const data = prop.value.data
        console.log(prop)

        if (parseInt(data.id_user) !== 0) {
            console.log(data.id_user)

        } else {
            setLog(false)
            console.log("no esta logueado")
        }


    }, [])

    useEffect(() => {

        if (localStorage.getItem('userSession')) {
            const userSession = JSON.parse(localStorage.getItem('userSession'))
            if (parseInt(userSession.id_user) !== 0) {
                setLog(true)
            }
        }

    }, [])




    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div>




            {
                log ? (
                    <div>



                        <AuthProvider>
                            <Router>
                                <div className="container mt-5">
                                    <div className="btn-group">
                                        <Link to="/" className="btn btn-dark">Table</Link>
                                        {/* <Link to="/bla" className="btn btn-dark">Bla bla bla</Link>
                                    <NavLink to="/users" className="btn btn-dark" activeClassName="active">Users</NavLink> */}
                                    </div>
                                    <hr />
                                    <Switch>
                                        <Route path="/" exact>
                                            <Tablebudgest />
                                        </Route>
                                        <Route path="/bla">
                                            <Tablebudgest />
                                        </Route>
                                        <Route path="/users/:id" exact>
                                            <Tablebudgest />
                                        </Route>
                                        <Route path="/users">
                                            <Tablebudgest />
                                        </Route>
                                    </Switch>
                                </div>
                            </Router>
                        </AuthProvider>






                    </div>) :
                    (<AuthProvider>
                        <div className="credential">
                            <div className="date-center">

                                <Box sx={{ width: '100%' }}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                                            <Tab label="Login" {...a11yProps(0)} />
                                            <Tab label="Register" {...a11yProps(1)} />
                                        </Tabs>
                                    </Box>
                                    <TabPanel value={value} index={0}>
                                        <Login />
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <Register />
                                    </TabPanel>

                                </Box>
                            </div>
                        </div>
                    </AuthProvider>
                    )
            }
        </div>
    )
}

export default Main
