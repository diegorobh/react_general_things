import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ( { loggedIn } )=>{
    return (
        <header>
            <ul>
                <li style = { (loggedIn) ? {display:"none"} : {display:"block"} } ><Link to = "/Login">Login</Link></li>
                <li><Link to = "/About">Acerca de</Link></li>
                <li style = { (loggedIn) ? {display:"block"} : {display:"none"} } ><Link to = "/Posts">Posts</Link></li>
            </ul>
        </header>
    )
}

export default NavBar;