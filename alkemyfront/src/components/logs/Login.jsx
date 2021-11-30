import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {

    const [user, setUser] = useState("")

    const onchangeUserData = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }


    const insertLog = async (e) => {
        e.preventDefault()
        console.log({ ...user });

        const n = await axios({
            url: 'http://localhost:3001/api/users/login',
            method: 'POST',
            contentType: 'application/json',
            // data: JSON.stringify({ ...user}),
            data: { ...user },
            success: function (response) {
                console.log(response);
            }
        });
        console.log(n.data[0]);
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
