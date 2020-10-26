import React from "react";

import logo from '../img/pokeballsite.png';

export function Navbar() {
  return ( 
  	<nav className="navbar navbar-light bg-light mb-5">
    	<a className="navbar-brand" href="#">
        <strong>
        <img src={logo} width="30" height="30" className="d-inline-block align-top mr-1" alt="" />
        CryptoPokes
        </strong>
        </a>
    </nav>   
    );
}