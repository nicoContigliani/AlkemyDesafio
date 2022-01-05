import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCoffee, user } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {

    const logout = () => {
        localStorage.setItem('userSession', JSON.stringify({
            token: "",
            id_user: "",
            email: "",
            fullname: "",
            id_roles: ""
        }))
        localStorage.removeItem('userSession');
        window.location.reload(false);
    }


    return (
        <div>

            <div className='nav'>

                <ul class="h-menu">
                    <li><Link to="/">Home</Link></li>
                    <li> <Link to="/boudgetsForm">Create Budgets</Link></li>
                    {/* <li > <Link onClick={logout} type='bytton'>Log Out</Link></li> */}
                    {/* <li><a href="#" >Support</a></li>
                <li><a href="#">Cart</a></li> */}
                </ul>

                {/* <Link to="/">Home</Link> */}
                {/* <Link to="/boudgetsForm">Create Budgets</Link> */}



            </div>

            <div class="container">
                <button onClick={logout} type='bytton' className='btn btn-prmary'><i class="fa fa-sign-out" aria-hidden="true" onClick={logout} type='bytton'></i>Logout </button>

            </div>
        </div>

    )
}

export default Navbar
