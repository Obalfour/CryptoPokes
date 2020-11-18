async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(
        "Deploying contracts with the account:",
        await deployer.getAddress()
    );
    console.log("Account balance:", (await deployer.getBalance()).toString());
    const Token = await ethers.getContractFactory("PokeToken");
    const token = await Token.deploy();
    await token.deployed();
    console.log("Registry address:", token.address);
    saveFrontendFiles(token);
  }

  function saveFrontendFiles(token) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../frontend/src/contracts";
  
    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }
  
    fs.writeFileSync(
        contractsDir + "/token-address.json",
        JSON.stringify({ address: token.address }, undefined, 2)
    );
  
    fs.copyFileSync(
        __dirname + "/../artifacts/PokeToken.json",
        contractsDir + "/PokeToken.json"
    );
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
});