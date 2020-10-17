import React from "react";

import { NetworkErrorMessage } from "./NetworkErrorMessage";
import pikachu from '../img/pokesite.png';
import logo from '../img/pokeballsite.png';

export function ConnectWallet({ connectWallet, networkError, dismiss }) {
  return (
    /*<div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 text-center">
          {/* Metamask network should be set to Localhost:8545. *//*}
          {networkError && (
            <NetworkErrorMessage 
              message={networkError} 
              dismiss={dismiss} 
            />
          )}
        </div>
        <div className="col-6 p-4 text-center">
          <p>Please connect to your wallet.</p>
          <button
            className="btn btn-warning"
            type="button"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div> */
    <div className="container">
      <nav className="navbar navbar-light bg-light mb-5">
        <a className="navbar-brand" href="#">
        <strong>
        <img src={logo} width="30" height="30" className="d-inline-block align-top mr-1" alt="" />
        CryptoPokes
        </strong>
        </a>
      </nav>
      <div className="row justify-content-md-center">
        <div className="col-md-8 my-auto text-center">
          <h1 className="bd-title"><strong>Become a Pokémon Master</strong></h1>
          <h3>
            <small className="text-muted">Start collecting trading cards using blockchain technology and become the ultimate pokémon trainer.</small>
          </h3>
          <button type="button" className="btn btn-danger btn-lg mt-3" onClick={connectWallet}>Connect your wallet</button>
        </div>
        <div className="col-md-4 text-center">
          <img src={pikachu} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
