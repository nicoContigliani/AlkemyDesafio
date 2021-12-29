import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";


const Form = (props) => {
    const [data, setData] = useState("")
    const [edit, setEdit] = useState(false)
    const [dleteId,setDeleteID]=useState([])
    const [element, setElmenet] = useState({
        concept: "concept",
        amount: "amount",
        date: "date",
        type: "type"

    })
    let history = useHistory();

    const [user, setUser] = useState({
        email: "email@gmail.com",
        fullname: "customer",
        id_user: 1000000000000
    })

    useEffect(() => {
        setTimeout(() => {

            if (localStorage.getItem('userSession')) {
                const userSession = JSON.parse(localStorage.getItem('userSession'))
                if (parseInt(userSession.id_user) !== 0) {
                    setUser(userSession)
                }
            }

        }, 1000);
        if (props.value.edit === true) {
            setEdit(true)
            setData(props.value);

        }
    }, [])


    const insertBudgets = async (element) => {


        const n = await axios({
            url: 'http://localhost:3001/api/budgets/',
            method: 'POST',
            contentType: 'application/json',
            // data: JSON.stringify({ ...user}),
            data: { ...element },
            success: function (response) {
                console.log(response);
                // localStorage.setItem('userSession', JSON.stringify(response))

            }
        });
        handleClick()
    }

    const onchangeForm = (e) => {
        // console.log(e.target.value);
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const send = (e) => {
        e.preventDefault()
        console.log(data);
        const id_user = user.id_user;
        const forsend = {
            ...data,
            id_user

        };
        insertBudgets(forsend)
    }

    function handleClick() {
        history.push("/");
    }

    const edits = async (e) => {
        e.preventDefault()
        console.log(data);
        const id_user = parseInt(data.id_user)
        const {
            amount, concept, date, id_budget, type
        } = data


        // console.log("esto es desde editar ", amount, concept, date, id_user, type);

        const n = await axios({
            url: `http://localhost:3001/api/budgets/${id_budget}`,
            method: 'POST',
            contentType: 'application/json',
            // data: JSON.stringify({ ...user}),
            data: { amount, concept, date, id_user, type },
            success: function (response) {
                // console.log(response);
                // localStorage.setItem('userSession', JSON.stringify(response))

            }
        });
        handleClick()
        handleClick()


    }
    const onchangeFormE = (e) => {
        // console.log(e.target.value);
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const deletes = async (e) => {
        e.preventDefault()
       
        const n = await axios({
            url: `http://localhost:3001/api/budgets/${data.id_budget}`,
            method: 'DELETE',
            contentType: 'application/json',
            // data: JSON.stringify({ ...user}),
            // data: { amount, concept, date, id_user, type },
            success: function (response) {
                 console.log(response);
                // localStorage.setItem('userSession', JSON.stringify(response))

            }
        });
        handleClick()


        
    }


    return (

        <div id="mainbudget">
            {
                edit ? (
                    <div>
                        <form onSubmit={edits} >

                            <input defaultValue={props.value.concept} onChange={onchangeFormE} name="concept" type="text" class="metro-input" placeholder="Concept" />
                            <input defaultValue={props.value.amount} onChange={onchangeFormE} name="amount" type="number" class="metro-input mt-2" placeholder="Amout" />
                            <input defaultValue={props.value.date} onChange={onchangeFormE} name="date" type="date" class="metro-input mt-2" placeholder="Concept" />
                            <br /><span>{props.value.date}</span>
                            <select defaultValue={props.value.date} name="type" onChange={onchangeFormE} placeholder="type" class="metro-input mt-2">
                                <option > Type</option>
                                <option name="type" value="entry">Entry</option>
                                <option name="type" value="egress">Egress</option>

                            </select>

                            <div class="d-grid gap-2">
                                <button type="submit" className="btn btn-primary mt-2 ">Update</button>

                            </div>

                        </form>
                        <div class="d-grid gap-2">
                            <button name="id_bud" type="submit" onClick={deletes} className="btn btn-outline-danger mt-2 ml-2 ">Delete</button>
                        </div>


                    </div>
                ) : (
                    <form onSubmit={send} >

                        <input onChange={onchangeForm} name="concept" type="text" class="metro-input" placeholder="Concept" />
                        <input onChange={onchangeForm} name="amount" type="number" class="metro-input mt-2" placeholder="Amout" />
                        <input onChange={onchangeForm} name="date" type="date" class="metro-input mt-2" placeholder="Concept" />
                        <select name="type" onChange={onchangeForm} placeholder="type" class="metro-input mt-2">
                            <option > Type</option>
                            <option name="type" value="entry">Entry</option>
                            <option name="type" value="egress">Egress</option>

                        </select>
                        <button type="submit" className="btn btn-primary mt-2 ">Send</button>
                    </form>
                )

            }


            {/* <button type="button" onClick={handleClick}>
               /
            </button> */}
        </div>
    )
}

export default Form
