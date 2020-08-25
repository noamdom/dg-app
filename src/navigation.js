import React, { Component } from 'react';
import { GiChefToque } from 'react-icons/gi';
import {Link } from 'react-router-dom'


class Navigation extends Component {


    render() {
       // const {user} = "Noam"

        return (
            <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <GiChefToque className="mr-1" /> Recipe analyzer
                     </Link>
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-item nav-link" to="/">
                            Home
                        </Link>
                        {/* <Link className="nav-item nav-link" to="/recipe">
                            Recipe
                        </Link> */}
                        <Link className="nav-item nav-link"  to="/ingredient">
                            Ingredients
                        </Link>
                        <Link className="nav-item nav-link"  to="/recipe-preferences">
                            Recipe preferences
                        </Link>
                        {/* <Link className="nav-item nav-link"  to="/process">
                            Process
                        </Link> */}
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
                </div>
            </nav>
        )

    }
}

export default Navigation;