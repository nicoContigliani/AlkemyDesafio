import React, { useState } from 'react'

const Login = () => {
    const [edit] = useState('')
    return (
        <div>
            {
                edit ? (
                    "hola desde enviar"
                ) : (
                    <div className="App">
                        
              
                        < div className="container">
                            <div class="input-group">

                                <input type="text" class="form-control" placeholder="email" />
                                <input type="password" class="form-control" placeholder="password" />
                            </div>
                        
                            <div className="center">
                                <div className="btn btn-secondary">Register</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Login
