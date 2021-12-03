import React from 'react'
import axios from 'axios'

const Resulting = () => {
    const insertLog = async (e) => {
        e.preventDefault()
        // console.log({ ...user });

        const n = await axios({
            url: 'http://localhost:3001/api/users/login',
            method: 'POST',
            contentType: 'application/json',
            // data: JSON.stringify({ ...user}),
            // data: { ...user },
            success: function (response) {
                console.log(response);
                // localStorage.setItem('userSession', JSON.stringify(response))

            }
        });
        const id_user = parseInt(n.data[0].id_user);
    

    }






    return (

        <div>
            resultante para la pantalla
        </div>
    )
}

export default Resulting
