import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Resulting from './Resulting'
import Tablebudgets from './Tablebudgets'

import { AuthContext } from '../../contexts/AuthProvider'


const Mainbudgets = () => {
    const { people, UserChange } = useContext(AuthContext)
   






    return (
        <div>
            <h1>Main</h1>


            <Resulting  />
            <br />
            <Tablebudgets />


        </div>
    )
}

export default Mainbudgets
