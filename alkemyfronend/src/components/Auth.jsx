import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { getUserAction, getUserActions } from '../features/Redux/authDucks';



const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
});
const schemas = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
    fullname: yup.string().min(8).max(32).required()
});



const Auth = (props) => {
    const history = useHistory();

    const dispatch = useDispatch()
    const [message, setMessage] = useState(false)
    const [users, setUsers] = useState("")
    const [userss, setUserss] = useState("")

    const [logs, setLogs] = useState(true)

    const user = useSelector(store => store.user)

    const dataInitial = {
        array: [],
        password: "123465789",
        email: "nico.contigliani@gmail.com",
    }

    const x = getUserAction(dataInitial)



    // const onchangeUserData = (e) => {
    //     setUsers({
    //         ...users,
    //         [e.target.name]: e.target.value
    //     })

    // }

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });



    const insertLog = async (data) => {
        // e.preventDefault()

        // const dataInitials = {
        //     array: [],
        //     password: users.password,
        //     email: users.email
        // }
        const dataInitials = {
            array: [],
            password: data.password,
            email: data.email
        }
        const x = getUserAction(dataInitials)
        // console.log(x);
        dispatch(x)
        // console.log(user.array.error, "esto es lo que viene del store **********");

        reset();


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
    const insertRegister = async (datas) => {
        // e.preventDefault()


        const dataInitials = {
            array: [],
            fullname: datas.fullname,
            password: datas.password,
            email: datas.email,
        }
        // console.log("auth.jsx - fronEnd valor data Initial", dataInitials);


        const xx = getUserActions(dataInitials)
        // console.log(x);
        dispatch(xx)

        console.log(user);
        console.log(user.array.error, "esto es lo que viene del store **********");
        reset();


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
                        {/* <form onSubmit={insertLog}> */}
                        <form onSubmit={handleSubmit(insertLog)}>


                            < div className="container">
                                <div className="input-group">

                                    <input type="email" className="form-control" placeholder="email" type="email"
                                        // name="email"
                                        //  onChange={onchangeUserData}
                                        {...register("email")}
                                        required
                                    />
                                    <br />
                                    <p>{errors.email?.message}</p>

                                    <input type="password" className="form-control" placeholder="password" type="password"
                                        // name="password"
                                        // onChange={onchangeUserData}
                                        {...register("password")}
                                        required
                                    />
                                    <br />
                                    <p>{errors.password?.message}</p>

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

                                    <input type="text" className="form-control" placeholder="email" type="email"
                                        // name="email" onChange={onchangeUserDatass} />
                                        {...register("email")}
                                        required
                                    />
                                    <br />
                                    <p>{errors.email?.message}</p>

                                </div>
                                <div className="input-group">

                                    <input type="text" className="form-control" placeholder="fullname" type="text"
                                        // name="password"
                                        // // name="fullname" onChange={onchangeUserDatass} />
                                        {...register("fullname")}
                                        required
                                    />
                                    <br />
                                    <p>{errors.fullname?.message}</p>


                                </div>
                                <div className="input-group">

                                    <input type="password" className="form-control" placeholder="password" type="password"
                                        // name="password"
                                        // name="password" onChange={onchangeUserDatass} />
                                        {...register("password")}
                                        required
                                    />
                                    <br />
                                    <p>{errors.password?.message}</p>

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
