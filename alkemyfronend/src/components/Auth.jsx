import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import logo from './utils/siluet.png'

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction, getUserActions } from '../features/Redux/authDucks';
import { motion } from "framer-motion"


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

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });



    const insertLog = async (data) => {

        const dataInitials = {
            array: [],
            password: data.password,
            email: data.email
        }
        const x = getUserAction(dataInitials)
        dispatch(x)
        reset();


        if (user.array.error === null) {


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

        // console.log(user);
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







    return (
        <div className='auth'>


            {/* <button onClick={() => { dispatch(x) }}>
                send
            </button> */}




            {
                logs ? (
                    <div className="Container">


                        <h1 className="Login">Login</h1>
                        {/* <form onSubmit={insertLog}> */}





                        <form className='LoginF' onSubmit={handleSubmit(insertLog)}>

                            < div className="container">
                                <div className="center">
                                    <motion.img src={logo} className='logoImagen'
                                        whileHover={{ scale: 1.3 }}
                                        whileTap={{ scale: 0.5 }}
                                    />

                                </div>
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
                                <div class="center">
                                    <div className="center">
                                        <motion.button type="submit" className="btn btn-info btn-sm "
                                            whileHover={{ scale: 1.3 }}
                                            whileTap={{ scale: 0.5 }}

                                        >Send</motion.button>
                                        <motion.button className="btn btn-outline-dark btn-sm" onClick={e => setLogs(false)}
                                            whileHover={{ scale: 1.3 }}
                                            whileTap={{ scale: 0.5 }}
                                        >Register</motion.button>
                                    </div>

                                </div>
                            </div>
                        </form>
                        <h2 className="LoginW"></h2>

                    </div>

                ) : (

                    <div className="App">
                        <h1 className="Login">Register</h1>

                        <form className='LoginF' onSubmit={insertRegister}>

                            <div className="container">
                                <div className="center">
                                    <motion.img src={logo} className='logoImagen'
                                        whileHover={{ scale: 1.3 }}
                                        whileTap={{ scale: 0.5 }}
                                    />

                                </div>
                                <div className="input-group">

                                    <input type="text" className="form-control" placeholder="email" type="email"
                                        {...register("email")}
                                        required
                                    />
                                    <br />
                                    <p>{errors.email?.message}</p>

                                </div>
                                <div className="input-group">

                                    <input type="text" className="form-control" placeholder="fullname" type="text"
                                        {...register("fullname")}
                                        required
                                    />
                                    <br />
                                    <p>{errors.fullname?.message}</p>


                                </div>
                                <div className="input-group">

                                    <input type="password" className="form-control" placeholder="password" type="password"
                                        {...register("password")}
                                        required
                                    />
                                    <br />
                                    <p>{errors.password?.message}</p>

                                </div>
                                <br />
                                <div className="center"><br />
                                    <div className="center">

                                        <motion.button type="submit" className="btn btn-info btn-sm"
                                            whileHover={{ scale: 1.3 }}
                                            whileTap={{ scale: 0.5 }}
                                        >Send</motion.button>
                                        <motion.button className="btn btn-outline-dark btn-sm" onClick={e => setLogs(true)}
                                            whileHover={{ scale: 1.3 }}
                                            whileTap={{ scale: 0.5 }}
                                        >Login</motion.button>
                                    </div>

                                </div>
                            </div>
                        </form>
                        <h2 className="LoginW"></h2>
                    </div>
                )





            }

        </div>
    )
}

export default Auth
