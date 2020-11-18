usePlugin("@nomiclabs/buidler-waffle");
usePlugin("@nomiclabs/buidler-web3");
usePlugin("@nomiclabs/buidler-ethers");

const dotenv = require('dotenv');
dotenv.config();

function getDeployerWallet() {
    const provider = ethers.getDefaultProvider('kovan');
    return new ethers.Wallet(PRIVATE_KEY, provider);
}

function getDeployedContract() {
    const provider = ethers.getDefaultProvider('kovan');
    const abi = JSON.parse(fs.readFileSync('./frontend/src/contracts/PokeToken.json')).abi;
    const contractAddress = JSON.parse(fs.readFileSync('./frontend/src/contracts/token-address.json')).address;
    return new ethers.Contract(contractAddress, abi, provider);
}

// Go to https://infura.io/ and create a new project
// Replace this with your Infura project ID
const INFURA_PROJECT_ID = process.env.MY_INFURA_PROJECT_ID;

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const PRIVATE_KEY = process.env.MY_PRIVATE_KEY;

module.exports = {
  solc: {
    version: "0.6.8"
  },
  networks: {
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [PRIVATE_KEY]
    }
  }
};
