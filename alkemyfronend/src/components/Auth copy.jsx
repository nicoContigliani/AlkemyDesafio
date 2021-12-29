import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { getUserAction, getUserActions } from '../features/Redux/authDucks';




const Auth = (props) => {
    const history = useHistory();

    const dispatch = useDispatch()
    const [message, setMessage] = useState(false)
    const [users, setUsers] = useState("")
    const [userss, setUserss] = useState("")

    const [logs, setLogs] = useState(true)



    useEffect(() => {
        // setTimeout(() => {

        //     if (localStorage.getItem('usuario')) {
        //         const userSession = JSON.parse(localStorage.getItem('usuario'))
        //         if (parseInt(userSession.id_user) !== 0) {
        //             setData(userSession)
        //         } else {
        //             console.log("no posee usuario logueado")

        //         }
        //     }

        // }, 1000);
        // if (props.value.edit === true) {
        //     setEdit(true)
        //     setData(props.value);

        // }
    }, [])



    const user = useSelector(store => store.user)
    // console.log(user)

    // const pokemones = useSelector(store => store.pokemones.array
    // )
    // console.log(user.array.token, "token");
    // console.log(user.array.rest[0], "array");
    // console.log(user.array.rest[0], "array");
    // console.log(user);

    // const emailss = user.array.email;
    // const fullname = user.array.fullname
    // const todo = user.array
    const dataInitial = {
        array: [],
        password: "123465789",
        email: "nico.contigliani@gmail.com",
    }

    const x = getUserAction(dataInitial)



    const onchangeUserData = (e) => {
        setUsers({
            ...users,
            [e.target.name]: e.target.value
        })

    }


    const insertLog = async (e) => {
        e.preventDefault()

        const dataInitials = {
            array: [],
            password: users.password,
            email: users.email
        }
        const x = getUserAction(dataInitials)
        // console.log(x);
        dispatch(x)
        // console.log(user.array.error, "esto es lo que viene del store **********");
        if (user.array.error === null) {

            // history.push('/');
            alert("hola")
            setTimeout(() => {
                window.location.reload(false);
            }, 1000);
        } else {
            console.log("no paso")
            setTimeout(() => {
                window.location.reload(false);
            }, 1000);

        }

    }

    //////////////////////////////////////////
    const onchangeUserDatass = (e) => {
        setUserss({
            ...userss,
            [e.target.name]: e.target.value
        })

    }
    // console.log(userss);
    const insertRegister = async (e) => {
        e.preventDefault()


        const dataInitials = {
            array: [],
            fullname: userss.fullname,
            password: userss.password,
            email: userss.email,
        }
        // console.log("auth.jsx - fronEnd valor data Initial", dataInitials);


        const xx = getUserActions(dataInitials)
        // console.log(x);
        dispatch(xx)

        console.log(user);
        console.log(user.array.error, "esto es lo que viene del store **********");
        if (user.array.error === null) {
            // history.push('/');
            alert("hola")
            setTimeout(() => {

                window.location.reload(false);
            }, 1000);
        } else {
            console.log("no paso")
            setTimeout(() => {

                window.location.reload(false);
            }, 1000);

        }

    }







    return (
        <div>


            {/* <button onClick={() => { dispatch(x) }}>
                send
            </button> */}




            {
                logs ? (
                    <div className="App">
                        <h1 className="App">Login</h1>
                        <form onSubmit={insertLog}>

                            < div className="container">
                                <div className="input-group">

                                    <input type="email" className="form-control" placeholder="email" name="email"
                                        onChange={onchangeUserData}
                                    />
                                    <input type="password" className="form-control" placeholder="password" name="password"
                                        onChange={onchangeUserData}
                                    />
                                </div>
                                <br />
                                <div className="center">
                                    <button type="submit" className="btn btn-info btn-sm ">Send</button>
                                    <button className="btn btn-outline-dark btn-sm" onClick={e => setLogs(false)}>Register</button>
                                </div>
                            </div>
                        </form>

                    </div>

                ) : (

                    <div className="App">
                        <h1 className="App">Register</h1>
                        <form onSubmit={insertRegister}>
                            <div className="container">
                                <div className="input-group">

                                    <input type="text" className="form-control" placeholder="email" name="email" onChange={onchangeUserDatass} />
                                </div>
                                <div className="input-group">

                                    <input type="text" className="form-control" placeholder="fullname" name="fullname" onChange={onchangeUserDatass} />

                                </div>
                                <div className="input-group">

                                    <input type="password" className="form-control" placeholder="password" name="password" onChange={onchangeUserDatass} />
                                    {/* <input type="password" class="form-control" placeholder="repeat password" name="password" onChange={onchangeUserDatas} /> */}
                                </div>
                                <br />
                                <div className="center"><br />
                                    <button type="submit" className="btn btn-primary btn-sm">Send</button>
                                    <button className="btn btn-outline-dark btn-sm" onClick={e => setLogs(true)}>Login</button>
                                </div>
                            </div>
                        </form>

                    </div>
                )





            }

        </div>
    )
}

export default Auth
