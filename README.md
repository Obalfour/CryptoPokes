# CryptoPokes

This repository contains a project of a Pokémon Trading Card Game using ERC 721 Non-Fungible Tokens. A special token is rewarded to a lucky user using on-chain verifiable random functions.

The dapp was created using a [sample project from buidler](http://buidler.dev/tutorial/hackathon-boilerplate-project.html). The NFTs were created following [this guide](https://docs.opensea.io/docs/getting-started). The random number generator used to mint the special tokens was created using [this Chainlink VRF tutorial](https://docs.chain.link/docs/get-a-random-number).

Wanna see this project live? [Try it out.](https://obalfour.github.io/CryptoPokes/)

## Quick start

The first things you need to do are cloning this repository and installing its
dependencies:

```sh
git clone https://github.com/nomiclabs/buidler-hackathon-boilerplate.git
cd buidler-hackathon-boilerplate
npm install
```

Once installed, let's run Buidler's testing network:

```sh
npx buidler node
```

Then, on a new terminal, go to the repository's root folder and run this to
deploy your contract:

```sh
npx buidler run scripts/deploy.js --network localhost
```

Finally, we can run the frontend with:

```sh
cd frontend
npm install
npm start
```

Open [http://localhost:3000/](http://localhost:3000/) to see your Dapp. You will
need to have [Metamask](http://metamask.io) installed and listening to
`localhost 8545`.

## User Guide

You can find detailed instructions on using this repository and many tips in [its documentation](http://buidler.dev/tutorial).

- [Project description (Token.sol)](http://buidler.dev/tutorial/4-contracts/)
- [Setting up the environment](http://buidler.dev/tutorial/1-setup/)
- [Testing with Buidler, Mocha and Waffle](http://buidler.dev/tutorial/5-test/)
- [Setting up Metamask](http://buidler.dev/tutorial/8-frontend/#setting-up-metamask)
- [Buidler's full documentation](https://buidler.dev/getting-started/)

For a complete introduction to Buidler, refer to [this guide](https://buidler.dev/getting-started/#overview).

## What’s Included?

Your environment will have everything you need to build a Dapp powered by Buidler and React.

- [Buidler](https://buidler.dev/): An Ethereum development task runner and testing network.
- [Chainlink](https://docs.chain.link/docs): A descentralized oracle network.
- [OpenZeppelin](https://docs.openzeppelin.com/openzeppelin/): A library of secure smart contracts.
- [Mocha](https://mochajs.org/): A JavaScript test runner.
- [Chai](https://www.chaijs.com/): A JavaScript assertion library.
- [ethers.js](https://docs.ethers.io/ethers.js/html/): A JavaScript library for interacting with Ethereum.
- [Waffle](https://github.com/EthWorks/Waffle/): To have Ethereum-specific Chai assertions/mathers.
- [A sample frontend/Dapp](./frontend): A Dapp which uses [Create React App](https://github.com/facebook/create-react-app).

## Troubleshooting

- `Invalid nonce` errors: if you are seeing this error on the `buidler node`
  console, try resetting your Metamask account. This will reset the account's
  transaction history and also the nonce. Open Metamask, click on your account
  followed by `Settings > Advanced > Reset Account`.

## Special credits

[151 pokemon of Kanto icon set by Geovanny Gavilanes](https://www.iconfinder.com/iconsets/151-1)

[Pikachu by Mohammad Ali](https://www.iconfinder.com/icons/1392683/charcter_go_game_pokemon_play_icon)

[Pokemon icons by roundicons.com](https://www.iconfinder.com/iconsets/pokemon-go-vol-1)
