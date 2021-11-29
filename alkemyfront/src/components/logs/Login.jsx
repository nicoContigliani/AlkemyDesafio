import React, { useState } from 'react'

const Login = () => {
    const [edit, setEdit] = useState('')
    return (
        <div>
            {
                edit ? (
                    "hola desde login"
                ) : (
                    "hola desde enviar"
                )
            }
        </div>
    )
}

export default Login
