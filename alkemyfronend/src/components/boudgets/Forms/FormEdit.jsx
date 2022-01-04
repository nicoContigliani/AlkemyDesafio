import React, { useEffect, useState } from 'react'
import { createBoudgetsActionn, updateBoudgetsActionn, deleteBoudgetsActionn } from '../../../features/Redux/boudgetsDucks';
import { useDispatch, useSelector } from 'react-redux';


import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { array } from 'yup/lib/locale';





const schema = yup.object().shape({

    concept: yup.string().min(3).max(180).required(),
    amount: yup.number().min(1).required(),
    date: yup.date().required(),
    type: yup.string().min(3).max(100).required(),
});


const FormEdit = (props) => {

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
                console.log("pasa", props);
                // setEdit(true)
                console.log(props);
                setDataEdit(props.value)
            } else {
                console.log("no pasa");
            }
        }, 1000);
    }, [])

    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),

        defaultValues: {
            amount: props.value.amount,
            concept: props.value.concept,
            date: props.value.date,
            type: props.value.type,
            id_budget: props.value.id_budget,
            id_user: props.value.id_user
        }
    });

    let history = useHistory();
    const update = (data) => {

        const id_budget = dataEdit.id_budget
        // const id_user = dataEdit.id_user;
        // console.log({ ...data, id_budget, id_user }, "que gato");

        const dataInitials = {
            array: [],
            concept: data.concept,
            amount: data.amount,
            date: data.date,
            type: data.type,
            id_budget: id_budget,
            // id_user: id_user
        }


        const x = updateBoudgetsActionn(dataInitials)
        dispatch(x)
        // history.push("/");

        // console.log(data);
        window.location.reload(false);
        reset();

    };

    const deletes = (data) => {
        alert(data)
        const id_budget = data.id_budget
        const id_user = dataEdit.id_user;
        // console.log({ ...data, id_budget, id_user }, "que gato");

        const dataInitials = {
            array: [],
            concept: data.concept,
            amount: data.amount,
            date: data.date,
            type: data.type,
            id_budget: data
            // id_budget: id_budget,
            // id_user: id_user
        }


        const x = deleteBoudgetsActionn(dataInitials)
        dispatch(x)
        window.location.reload(false);
        reset();
    }







    return (
        <div className='container'>
            <h1>New Element</h1>

            <form onSubmit={handleSubmit(update)}>






                <div class="form-row">
                    <div class="col-sm">
                        <label htmlFor="" className='leterletle '{...register("id_budget")} > Registro {dataEdit.id_budget}</label>
                    </div>
                    <div class="col-sm">
                        <input {...register("concept")} placeholder="concept" class="form-control" type="text" required defaultValue={dataEdit.concept} />
                        <p>{errors.concept?.message}</p>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-sm">
                        <input {...register("amount")} placeholder="amount" class="form-control" type="number" required defaultValue={dataEdit.amount} />
                        <p>{errors.amount?.message}</p>
                    </div>
                    <div class="col-sm">

                        <input {...register("date")} placeholder="date" type="date" class="form-control" required />
                        <p>{errors.date?.message}</p>
                        <span>
                            <label htmlFor="" className='leterletle'>{props.value.date}</label>
                        </span>
                    </div>
                </div>

                <select name="type" {...register("type")} placeholder="type" class="form-control" required defaultValue={dataEdit.type} disabled >
                    {dataEdit.type}
                    <option name="type" value="entry">entry</option>
                    <option name="type" value="egress">egress</option>

                </select>
                <p>{errors.type?.message}</p>

                <div class="form-row">
                    <div class="col-sm">
                        <button className='button primary outline mt ml-2' type="submit">Update</button>
                    </div>
                    <div class="col-sm">
                        <button name="id_bud" type="submit" onClick={() => deletes(dataEdit.id_budget)} className="btn btn-outline-danger mt ml-2 ">Delete</button>

                    </div>
                </div>
            </form>
            {/* <button className="button button-clear" onClick={() => history.push('/')}>button</button> */}



        </div>
    )
}

export default FormEdit
