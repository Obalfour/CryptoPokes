import React from "react";
import pikachu from '../img/pokesite.png';

import { Navbar } from "./NavbarUI";

export function NoWalletDetected() {
  return (
    /*
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-6 p-4 text-center">
          <p>
            No Ethereum wallet was detected. <br />
            Please install{" "}
            <a
              href="http://metamask.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              MetaMask
            </a>
            .
          </p>
        </div>
      </div>
    </div>
    */
    <div className="container">
      <Navbar/>
      <div className="row justify-content-md-center">
        <div className="col-md-8 my-auto text-center">
          <h1 className="bd-title"><strong>Become a Pokémon Master</strong></h1>
          <h3>
            <small className="text-muted">Start collecting trading cards using blockchain technology and become the ultimate pokémon trainer.</small>
          </h3>
          <div className="alert alert-warning d-inline-flex flex-column" role="alert">
            No Ethereum wallet was detected. <br/>
            <div>Please install{" "} <a href="http://metamask.io" target="_blank" rel="noopener noreferrer" className="alert-link"> MetaMask</a>. </div>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <img src={pikachu} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
