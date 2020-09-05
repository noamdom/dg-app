import React, { Component } from 'react';
import { GiChefToque, GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom'
import { colors } from '@material-ui/core';
import logo from '../images/logo.png';
import { divide } from 'lodash';


export default function TopPanel(props) {


    return (
        <nav className="site-nav navbar navbar-expand navbar-light   py-1"
            style={{ background: "var(--primary)", color: "var(--secondary)" }}>
            <div className="container-fluid ">
                <div to="/" className="navbar-brand">
                    <img className="py-0 my-0" src={logo} style={{ height: "4vh", width: "6vh", }} alt='logo' />
                         Recipe analyzer
                </div>
                
                <div className="navbar-nav jusfitfy-content-between" >
                    <a className={"nav-item nav-link " + (props.step === "menu" ? "active" : "")  } onClick={() => props.restart()} >Menu</a>
                    <a className={"nav-item nav-link " + (props.step === "diet" ? "active" : "")  } onClick={() => props.replace_diet()} >Diet</a>
                    <a className={"nav-item nav-link " + (props.step === "dish" ? "active" : "")  }  >Dish</a>
                </div>
            </div>
        </nav>
    )

}
