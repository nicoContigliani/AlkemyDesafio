import React, { useState, useEffect } from 'react'
import Login from '../logs/Login'
import Register from '../registers/Register'
import Mainbudget from '../budgets/Mainbudget'
import AuthProvider from '../../contexts/AuthProvider'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Button, Navbar, Container, Nav, Offcanvas, NavDropdown, Form, FormControl } from 'react-bootstrap';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Createbudget from '../budgets/Createbudget'
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

                        <br />










                        <AuthProvider>
                            <Router>
                                <div className="container mt-5">
                                    <div className="btn-group">
                                        <Navbar bg="outline-light" expand={false}>
                                            <Container fluid>
                                                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                                                <Navbar.Brand href="#">   <h2 className="ml-5">Alkemy</h2> </Navbar.Brand>
                                                <Navbar.Offcanvas
                                                    id="offcanvasNavbar"
                                                    aria-labelledby="offcanvasNavbarLabel"
                                                    placement="end"
                                                >
                                                    <Offcanvas.Header closeButton>
                                                        {/* <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title> */}
                                                    </Offcanvas.Header>
                                                    <Offcanvas.Body className="slate">
                                                        <Nav className="justify-content-end flex-grow-1 pe-3 ">
                                                            <div className="d-grid gap-2">
                                                                <Link to="/" className="btn btn-outline-secondary">Main</Link>
                                                                <Link to="/createbudget" className="btn btn-outline-secondary">Create </Link>

                                                                {/* <Link to="/createbudget" className="btn btn-outline-danger">Create </Link> */}

                                                                

                                                     
                                                            </div>

                                                        </Nav>
                                                        <hr />
                                                        <hr />

                                                        {/* <Form className="d-flex">
                                                            <FormControl
                                                                type="search"
                                                                placeholder="Search"
                                                                className="me-2"
                                                                aria-label="Search"
                                                            />
                                                            <Button variant="outline-success">Search</Button>
                                                        </Form> */}


                                                    </Offcanvas.Body>
                                                </Navbar.Offcanvas>
                                            </Container>
                                        </Navbar>

                                  
                                    </div>
                                    <hr />
                                    <Switch>
                                        <Route path="/" exact>
                                            <Mainbudget />
                                        </Route>
                                        <Route path="/createbudget">
                                            <Createbudget />
                                        </Route>
                                        <Route path="/users/:id" exact>
                                            <Mainbudget />
                                        </Route>
                                        <Route path="/users">
                                            <Mainbudget />
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
