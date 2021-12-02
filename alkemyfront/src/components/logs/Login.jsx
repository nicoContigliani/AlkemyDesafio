import React, { useContext, useState } from 'react'
import axios, { useEffect } from 'axios'

import { AuthContext } from '../../contexts/AuthProvider'



const Login = () => {
    const { people, UserChange } = useContext(AuthContext)

    const [user, setUser] = useState("")






    const onchangeUserData = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }


    const insertLog = async (e) => {
        e.preventDefault()
        // console.log({ ...user });

        const n = await axios({
            url: 'http://localhost:3001/api/users/login',
            method: 'POST',
            contentType: 'application/json',
            // data: JSON.stringify({ ...user}),
            data: { ...user },
            success: function (response) {
                console.log(response);
                // localStorage.setItem('userSession', JSON.stringify(response))

            }
        });
        const id_user = parseInt(n.data[0].id_user);
        if (id_user === 0) {
            // console.log("no");
        } else {
            UserChange(n.data[0])
            window.location.reload();

        }

    }

    return (
        <div>
            {

                <div className="App">
                    <form onSubmit={insertLog}>

                        < div className="container">
                            <div class="input-group">

                                <input type="text" class="form-control" placeholder="email" name="email"
                                    onChange={onchangeUserData}
                                />
                                <input type="password" class="form-control" placeholder="password" name="password"
                                    onChange={onchangeUserData}
                                />
                            </div>
                            <div className="center">
                                <button type="submit" class="btn btn-primary btn-sm ">Register</button>
                            </div>
                        </div>
                    </form>
                </div>

            }
        </div>
    )
}

export default Login
