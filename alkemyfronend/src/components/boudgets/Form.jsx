import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { createBoudgetsActionn } from '../../features/Redux/boudgetsDucks';
import { useDispatch, useSelector } from 'react-redux';


import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";



const schema = yup.object().shape({

    concept: yup.string().min(3).max(180).required(),
    amount: yup.number().min(1).required(),
    date: yup.date().required(),
    type: yup.string().min(3).max(100).required(),
});




const Form = (props) => {
    //aca va a tener que haber algo que venga con true de editar 
    const [edit, setEdit] = useState(false)


    const dispatch = useDispatch()


    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });



    const create = (data) => {
        console.log({ data });
        // reset();



        // e.preventDefault()

        // const dataInitials = {
        //     array: [],
        //     password: users.password,
        //     email: users.email
        // }
        const dataInitials = {
            array: [],
            concept: data.concept,
            amount: data.amount,
            date: data.date,
            type: data.type
        }
        const x = createBoudgetsActionn(dataInitials)
        // console.log(x);
        dispatch(x)
        // console.log(user.array.error, "esto es lo que viene del store **********");

        reset();


        // if (user.array.error === null) {

        //     // history.push('/');
        //     alert("hola")
        //     setTimeout(() => {
        //         window.location.reload(false);
        //     }, 1000);
        // } else {
        //     console.log("no paso")
        //     setTimeout(() => {
        //         window.location.reload(false);
        //     }, 1000);

        // }


    };




    return (
        <div>
            <h1>Form</h1>

            {
                edit ? (
                    <form onSubmit={handleSubmit(create)}>
                        <br />

                        <input {...register("concept")} placeholder="concept" type="text" required />
                        <p>{errors.concept?.message}</p>
                        <br />
                        <input {...register("amount")} placeholder="amount" type="number" required />
                        <p>{errors.amount?.message}</p>
                        <br />
                        <input {...register("date")} placeholder="date" type="date" required />
                        <p>{errors.date?.message}</p>
                        <br />
                        <input {...register("type")} placeholder="type" type="type" required />
                        <p>{errors.type?.message}</p>
                        <br />



                        <button type="submit">Sign in</button>
                    </form>
                ) : (
                    <form onSubmit={handleSubmit(create)}>
                        <br />
                        <input {...register("concept")} placeholder="concept" type="text" required />
                        <p>{errors.concept?.message}</p>
                        <br />
                        <input {...register("amount")} placeholder="amount" type="number" required />
                        <p>{errors.amount?.message}</p>
                        <br />
                        <input {...register("date")} placeholder="date" type="date" required />
                        <p>{errors.date?.message}</p>
                        <br />
                        <input {...register("type")} placeholder="type" type="type" required />
                        <p>{errors.type?.message}</p>
                        <br />

                        <button type="submit">Sign in</button>
                    </form>
                )
            }




        </div>

    )
}

export default Form
