import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { createBoudgetsActionn, updateBoudgetsActionn } from '../../features/Redux/boudgetsDucks';
import { useDispatch, useSelector } from 'react-redux';


import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { array } from 'yup/lib/locale';
import FormEdit from './Forms/FormEdit';




const schema = yup.object().shape({

    concept: yup.string().min(3).max(180).required(),
    amount: yup.number().min(1).required(),
    date: yup.date().required(),
    type: yup.string().min(3).max(100).required(),
});





const Form = (props) => {
    //aca va a tener que haber algo que venga con true de editar 
    const [edit, setEdit] = useState(false)
    const [dataEdit, setDataEdit] = useState({
        amount: 0,
        concept: "ducks",
        date: "",
        type: ""
    })
    useEffect(() => {
        setTimeout(() => {
            if (props.value !== undefined) {
                setEdit(true)
                setDataEdit(props.value)
            } else {
                console.log("no pasa");
            }
        }, 1000);
    }, [])


    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const create = (data) => {
        // console.log({ data });
        const id_budget = dataEdit.id_budget
        const id_user = dataEdit.id_user;

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
        history.push("/");
        reset();
        window.location.reload(false);
    };

    const update = (data) => {
        const id_budgest = dataEdit.id_budget
        const id_user = dataEdit.id_user;
        console.log({ ...data, id_budgest, id_user }, "que gato");

        const dataInitials = {
            array: [],
            concept: data.concept,
            amount: data.amount,
            date: data.date,
            type: data.type,
            // id_budget: id_budget,
            // id_user: id_user
        }


        const x = updateBoudgetsActionn(dataInitials)
        dispatch(x)
        reset();

        history.push("/");

    };

    let history = useHistory();
    return (
        <div className='center'>


            {
                edit ? (
                    <div>

                        <FormEdit value={props.value} />
                    </div>
                ) : (


                    <div>
                        <h1>New Element</h1>

                        <form onSubmit={handleSubmit(create)}>
                            <input {...register("concept")} placeholder="concept" type="text" required />
                            <p>{errors.concept?.message}</p>
                            <input {...register("amount")} placeholder="amount" type="number" required />
                            <p>{errors.amount?.message}</p>
                            <input {...register("date")} placeholder="date" type="date" required />
                            <p>{errors.date?.message}</p>

                            <select name="type" {...register("type")} placeholder="type" class="metro-input mt-2" required>
                                <option placeholder="type"> Type</option>
                                <option name="type" value="entry">Entry</option>
                                <option name="type" value="egress">Egress</option>

                            </select>
                            <p>{errors.type?.message}</p>


                            <button type="submit" className='btn btn-info'>Send</button>
                        </form>
                    </div>
                )
            }




        </div>

    )
}

export default Form
