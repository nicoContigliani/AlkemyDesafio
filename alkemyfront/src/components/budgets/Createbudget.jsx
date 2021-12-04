import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import Form from './utils/Form';



const Createbudget = () => {

    const [create, setCreate] = useState("create")
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
    return (
        <div>
            Create new entry {user.fullname}
            <Form value={create} />
        </div>
    )
}

export default Createbudget
