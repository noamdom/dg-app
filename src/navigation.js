import React, { Component } from 'react';
import { GiChefToque , GiHamburgerMenu } from 'react-icons/gi';
import {Link } from 'react-router-dom'
import { colors } from '@material-ui/core';
import logo from './images/logo.png';


class Navigation extends Component {


    render() {
       // const {user} = "Noam"

        return (
            <nav className="site-nav family-sans navbar navbar-expand navbar-light  higher my-s"
            style={{background: "var(--primary)" , color: "var(--secondary)" }}>
                <div className="container-fluid ">
                    <Link to="/" className="navbar-brand">
                        {/* <img src={logo} style={{height: "5%" , width:"5%" , }} alt='logo' /> */}
                         Recipe analyzer
                     </Link>
                    <div className="navbar-nav jusfitfy-content-between" >
                        {/* <Link className="nav-item nav-link" to="/home">
                            Home
                        </Link> */}
                        {/* <Link className="nav-item nav-link" to="/recipe">
                            Recipe
                        </Link> */}
                        {/* <Link className="nav-item nav-link"  to="/ingredient" >
                            Ingredients
                        </Link> */}
                        <Link className="nav-item nav-link"  to="/">
                            Menu
                        </Link>
                        <Link className="nav-item nav-link"  to="/diet">
                            diet
                        </Link>
                        <Link className="nav-item nav-link"  to="/dish">
                            dish
                        </Link>
                        <Link className="nav-item nav-link"  to="/process">
                            Process
                        </Link>
                        <Link className="nav-item nav-link"  to="/tests">
                            Tests
                        </Link>


                        {/* <a className="nav-item nav-link" href="/login">
                            log in
                        </a>
                        <a className="nav-item nav-link" href="/register">
                            register
                        </a>
                        <a className="nav-item nav-link" href="/login">
                            log out
                        </a> */}



                    </div>
                    <div>

                    {/* <GiHamburgerMenu /> */}
                    </div>
                </div>
            </nav>
        )

    }
}

export default Navigation;