import React from 'react';
import {Link } from 'react-router-dom'

const NavBar = () => (
    <nav>
        <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/recipe" >Recipe</Link></li>
            <li><Link to="/ingredient" >Ingredient</Link></li>
        </ul>
    </nav>
)


export default NavBar;