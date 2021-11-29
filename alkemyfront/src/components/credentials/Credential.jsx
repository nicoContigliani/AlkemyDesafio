import React, { useState } from 'react'
import Login from '../logs/Login'
import Register from '../registers/Register'
const Credential = () => {
    const [reg, setReg] = useState(false)
    return (
        <div className="credential">

            <div className="box">
                {
                    reg ? (
                        <Register />
                    ) : (
                        <Login />
                    )
                }

            </div>
        </div>
    )
}

export default Credential
