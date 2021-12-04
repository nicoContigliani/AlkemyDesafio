import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";


const Form = (props) => {
    let history = useHistory();

    const [data, setData] = useState("")
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

    return (
        <div id="mainbudget">


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

            {/* <button type="button" onClick={handleClick}>
               /
            </button> */}
        </div>
    )
}

export default Form
