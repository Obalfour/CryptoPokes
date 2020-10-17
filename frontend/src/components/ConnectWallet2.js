import React from "react";

import { NetworkErrorMessage } from "./NetworkErrorMessage";
import ReactCardFlip from 'react-card-flip';
import pikachu from '../img/pokesite.png';
import logo from '../img/pokeballsite.png';
import backcard from '../img/backcard.png';

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
          /* <div className="bg-warning pb-2 pt-2 pr-2 pl-2 d-flex rounded" style={{height: '375px', width: '250px'}}>
            <div className="card text-white bg-primary d-flex pr-2 pl-2">
              <div style={{padding: '0px'}} className="card-header mt-2">
                <h5><strong>#1 Bulbasaur</strong></h5>
              </div>
              <div className="card border-light bg-light">
                <img style={{height: '150px'}} src="https://cdn1.iconfinder.com/data/icons/151-1/500/p-02-512.png" className="card-img-top" alt="..."/>
              </div>
              <div className="card-footer pb-0 pr-2 pl-2" style={{height: '155px'}}>
                <div style={{height: '108px'}}>
                  <div className="d-flex flex-row">
                    <h5>Vine Whip</h5>
                  </div>
                  <div className="d-flex flex-row">
                    <p className="card-text"><small>The target is struck with slender, whiplike vines to inflict damage.</small></p>
                  </div>
                </div>
                <div className="d-flex flex-row-reverse align-self-end">
                  <h5>50 pts</h5>
                </div>
              </div>
            </div>
          </div>  
          */

          <div className="bg-light pb-2 pt-2 pr-2 pl-2 d-flex rounded" style={{height: '375px', width: '250px'}}>
            <img style={{height: '230px'}} class="card-img-top" src={backcard} alt="Card image cap"/>
          </div>  

        </div>
      </div>
    </div>
  );
}
