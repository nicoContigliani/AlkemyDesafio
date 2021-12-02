import React, { useEffect, useState } from 'react'

export const AuthContext = React.createContext()


const AuthProvider = (props) => {
    // const users = {
    //     id_user: 10,
    //     fullname: "nico",
    //     email: "nico.contigliani@gmail.com"
    // }
    const [people, setPeople] = useState({
        value: {
            data: [{
                email: "not user",
                id_user: 0
            }]
        }

    });

    // useEffect(() => {

    //     if (localStorage.getItem('userSession')) {
    //         const userSession = JSON.parse(localStorage.getItem('userSession'))
    //         setUser(userSession)
    //     }

    // }, [])

    const UserChange = (data) => {
        setPeople(data)
        localStorage.setItem('userSession', JSON.stringify(data))
        console.log(data, "esto esta insertando")


    }

    return (
        // <AuthContext.Provider value={{ user, UserChange }}>
        <AuthContext.Provider value={{ people, UserChange }}>

            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
