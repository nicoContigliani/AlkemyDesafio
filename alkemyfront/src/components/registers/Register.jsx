import React from 'react'

const Register = () => {
    return (
        <div className="App">
           
            <div className="container">
                <div class="input-group">

                    <input type="text" class="form-control" placeholder="email" name="email" />
                    <input type="text" class="form-control" placeholder="fullname" name="fullname" />
                </div>
                <div class="input-group">

                    <input type="password" class="form-control" placeholder="pasword" name="password"/>
                    <input type="password" class="form-control" placeholder="repeat password" name="password" />
                </div>
                <div className="center">
                    <div className="btn btn-secondary">Register</div>
                </div>
            </div>


        </div>
    )
}

export default Register
